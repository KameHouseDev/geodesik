import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export interface IamStackProps extends cdk.StackProps {
  readonly projectName: string;
  readonly fromEmail: string;
}

export class IamStack extends cdk.Stack {
  public readonly sesUser: iam.User;
  public readonly accessKey: iam.CfnAccessKey;

  constructor(scope: Construct, id: string, props: IamStackProps) {
    super(scope, id, props);

    // Crear usuario IAM específico para SES
    this.sesUser = new iam.User(this, 'SesUser', {
      userName: `${props.projectName}-ses-user`,
    });

    // Política restrictiva solo para SES con el email específico
    const sesPolicy = new iam.Policy(this, 'SesPolicy', {
      policyName: `${props.projectName}-ses-policy`,
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: [
            'ses:SendEmail',
            'ses:SendRawEmail',
          ],
          resources: ['*'], // SES requiere * para estas acciones
          conditions: {
            StringEquals: {
              'ses:FromAddress': props.fromEmail,
            },
          },
        }),
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          actions: [
            'ses:GetSendQuota',
            'ses:GetSendStatistics',
          ],
          resources: ['*'],
        }),
      ],
    });

    sesPolicy.attachToUser(this.sesUser);

    // Crear Access Key para el usuario
    this.accessKey = new iam.CfnAccessKey(this, 'SesUserAccessKey', {
      userName: this.sesUser.userName,
    });

    // Outputs importantes - ESTOS SON LOS SECRETOS PARA GITHUB
    new cdk.CfnOutput(this, 'AccessKeyId', {
      value: this.accessKey.ref,
      description: '⚠️ AWS_ACCESS_KEY_ID - Add this to GitHub Secrets',
    });

    new cdk.CfnOutput(this, 'SecretAccessKey', {
      value: this.accessKey.attrSecretAccessKey,
      description: '⚠️ AWS_SECRET_ACCESS_KEY - Add this to GitHub Secrets (COPY NOW - you won\'t see it again)',
    });

    new cdk.CfnOutput(this, 'UserArn', {
      value: this.sesUser.userArn,
      description: 'ARN of the IAM user',
      exportName: 'GeodesikSesUserArn',
    });

    new cdk.CfnOutput(this, 'FromEmail', {
      value: props.fromEmail,
      description: 'SES_FROM_EMAIL - Add this to GitHub Secrets',
    });

    new cdk.CfnOutput(this, 'ToEmail', {
      value: props.fromEmail,
      description: 'SES_TO_EMAIL - Add this to GitHub Secrets',
    });

    // Advertencia de seguridad
    new cdk.CfnOutput(this, 'SecurityWarning', {
      value: '⚠️ IMPORTANT: Copy the SecretAccessKey NOW and add to GitHub Secrets. It will not be shown again!',
      description: 'Security reminder',
    });
  }
}

import * as cdk from 'aws-cdk-lib';
import * as ses from 'aws-cdk-lib/aws-ses';
import { Construct } from 'constructs';

export interface SesStackProps extends cdk.StackProps {
  readonly domain: string;
  readonly fromEmail: string;
}

export class SesStack extends cdk.Stack {
  public readonly emailIdentity: ses.CfnEmailIdentity;
  public readonly domainIdentity: ses.CfnEmailIdentity;

  constructor(scope: Construct, id: string, props: SesStackProps) {
    super(scope, id, props);

    // Verificar el email individual
    this.emailIdentity = new ses.CfnEmailIdentity(this, 'EmailIdentity', {
      emailIdentity: props.fromEmail,
    });

    // Verificar el dominio completo (opcional pero recomendado)
    this.domainIdentity = new ses.CfnEmailIdentity(this, 'DomainIdentity', {
      emailIdentity: props.domain,
      dkimSigningAttributes: {
        nextSigningKeyLength: 'RSA_2048_BIT',
      },
    });

    // Configuration Set para tracking (opcional)
    const configSet = new ses.CfnConfigurationSet(this, 'ContactFormConfigSet', {
      name: `${props.domain.replace('.', '-')}-contact-form`,
    });

    // Outputs útiles
    new cdk.CfnOutput(this, 'EmailToVerify', {
      value: props.fromEmail,
      description: 'Email identity to verify',
    });

    new cdk.CfnOutput(this, 'DomainToVerify', {
      value: props.domain,
      description: 'Domain identity to verify',
    });

    new cdk.CfnOutput(this, 'DkimToken1', {
      value: this.domainIdentity.attrDkimDnsTokenName1,
      description: 'DKIM Token 1 - Add CNAME: [token]._domainkey.geodesik.cl -> [token].dkim.amazonses.com',
    });

    new cdk.CfnOutput(this, 'DkimToken2', {
      value: this.domainIdentity.attrDkimDnsTokenName2,
      description: 'DKIM Token 2 - Add CNAME: [token]._domainkey.geodesik.cl -> [token].dkim.amazonses.com',
    });

    new cdk.CfnOutput(this, 'DkimToken3', {
      value: this.domainIdentity.attrDkimDnsTokenName3,
      description: 'DKIM Token 3 - Add CNAME: [token]._domainkey.geodesik.cl -> [token].dkim.amazonses.com',
    });

    new cdk.CfnOutput(this, 'ConfigurationSetName', {
      value: configSet.name || '',
      description: 'SES Configuration Set name',
    });

    // Instructions
    new cdk.CfnOutput(this, 'NextSteps', {
      value: `1. Verify ${props.fromEmail} by clicking the link in your email. 2. Add DKIM CNAME records to DNS for ${props.domain}. 3. Request production access in SES console.`,
      description: 'Next steps to complete SES setup',
    });
  }
}

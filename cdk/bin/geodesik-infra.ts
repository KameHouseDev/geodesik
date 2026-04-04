#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SesStack } from '../lib/ses-stack';
import { IamStack } from '../lib/iam-stack';

const app = new cdk.App();

// Configuración base
const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1', // SES funciona mejor en us-east-1
};

const config = {
  projectName: 'geodesik',
  domain: 'geodesik.cl',
  fromEmail: 'ventas@geodesik.cl',
  toEmail: 'ventas@geodesik.cl',
};

// Stack de SES - configuración de email
const sesStack = new SesStack(app, 'GeodesikSesStack', {
  env,
  description: 'SES configuration for Geodesik contact form',
  domain: config.domain,
  fromEmail: config.fromEmail,
  tags: {
    Project: config.projectName,
    Environment: 'production',
    ManagedBy: 'CDK',
  },
});

// Stack de IAM - usuario para el backend
const iamStack = new IamStack(app, 'GeodesikIamStack', {
  env,
  description: 'IAM user and policies for Geodesik backend',
  projectName: config.projectName,
  fromEmail: config.fromEmail,
  tags: {
    Project: config.projectName,
    Environment: 'production',
    ManagedBy: 'CDK',
  },
});

app.synth();

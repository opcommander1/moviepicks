// export const proxy = 'https://cors-anywhere.herokuapp.com/';
// export const key = '3d6ac87c32c71a4673657cec3692d846';


export let s3 = new aws.S3({
  KEY: process.env.KEY,
  PROXY: process.env.PROXY
});
const AWS = require('aws-sdk');


const getS3AssetUrl = (filename) => {
	const signedUrlExpireSeconds = 300 * 1;
	// console.log(`DUDUDU\n${process.env.REACT_APP_AWS_ACCESS_KEY_ID} | ${process.env.REACT_APP_AWS_SECRET_ACCESS_KEY}| ${process.env.REACT_APP_S3_BUCKET_NAME}`);
	const s3 = new AWS.S3({
		accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
		signatureVersion: 'v4',
		region: 'us-west-2',
		secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
	});

	return s3.getSignedUrl('getObject', {
		Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
		Key: filename,
		Expires: signedUrlExpireSeconds
	});
};

export default getS3AssetUrl;

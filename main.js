import IDVC from '@idscan/idvc2'
// import '@idscan/idvc2/dist/css/idvc.css'

const prodKey = 'eyJwZGY0MTdrZXkiOiJmZUdmb2NKZlhaaG40MDVoTW15Q3pSOXJCWXJXRnZ3Ui9lZ1dIQlJPTW9xVXdvMWttb1dCR3lPanpYaTlaVXJlNTMvb2MxRmdHZUZQMmxnNUV2TGxKZmFxZjFHMEpOMC9JS3ZzQWxoS3RLL2h2XHUwMDJCM25cdTAwMkJHQ0RrTDRQODNVTVRQRmxmVzRpVVRYQ2JTRTBcdTAwMkIvb2M0c0tPTzdadWRIYmhmeGNrQXNxUTU2amhlYUk9IiwiY29tbW9uTGljZW5zZUtleSI6IjBMcVpyOUc4NWhGLzZXdXZNY3Y3cWgzWFN0V2lMQUFCcUlYNmpPRWdoc25YMlhcdTAwMkJHWXAyb3o1NlE3eGIwRS9GTG9qZzQ2VGxFdnlmbkM1ZTZqVm1PbVhmLzh1WlBReURPMmNQN1x1MDAyQjAzQzJZcjc5SFx1MDAyQnNLbjlvR3E2WkQ5c3lkUU5PNjV6V0tMUnJcdTAwMkJROTBvQnBSYmJUb2F3TGpwb1FSQS9BNFpmMlZuYktTemw0PSIsImltYWdlUHJvY2Vzc2luZ0tleSI6Im10T05KcjJHQ2ZMQmpITlx1MDAyQjQySFJRb1x1MDAyQjhocVBUTXFLTUVQUWZiXHUwMDJCRVZPd2hFMGNodENBcU9NSGExTTFcdTAwMkJvUG5iNm52S3FydGFcdTAwMkJ4S3VPRjlQODFQU3IyRkk3empKMmNqQm1ZY2xkZDZpaFJ3VzY2elx1MDAyQldTUHJiaGdRUGNkNklsVVNNa1hYOFZjYXNYelZnbnI0WGxQWnBoNEViaUMwTTdINEs0MVN4YmhnemhuVT0iLCJ0cmFja1N0cmluZ1BhcnNlcktleSI6IncyT1dhVHZiV0dpN2U3aFl4OHpGSlBSS1pieUFBdDM5V3ZjRC92MmNTRzhqb0ZLZlpsNkgyOWxvVHFrNUp3cnZHOS9wWnpNRDVTWjNyZS9ySHJsQ041enkxTkpud0pLWG9TZkprMW03cEZzODdxUDI3S2J2djhzMWJhWWplXHUwMDJCTENLaWd3TWRiMHN1WVluWTJEZXJUd1V6ODY0WFl5eUFxMDZ1T21jMjdlVTlzPSIsImlPU01SWkRldGVjdG9yS2V5IjoiUDc5M1lRL2lxSHVjeW1OTGR3V3JBV2VaRXNYdnZkcXE0c21TaU9yMXg4Tmd3c3doSjV2Zk5QMkYwSnp0VVlxRDlhVEw5WU5vXHUwMDJCa2Qydkx5VU1GWmY5cTd6THE2RjFraVx1MDAyQkxMR1BFZ3lTY1l5d1MvOFN1NjJaTEtYVHBjLzNLaDN2MUhEN2MzajQ4dkw2Y00yRlc2UW1XVXFoSk1RdHVlRzUvZHZaYXU3R1F3TT0iLCJpT1NQREZEZXRlY3RvcktleSI6ImlKZFB2RmNLMkktT3NIdE1hTW5JZE0uUHZQZUVySmNDZUdsQi5MYUxwTnBEIn0='

const config = {
    licenseKey: prodKey,
    el: "videoCapturingEl",
    autoContinue: true,
    fixFrontOrientAfterUpload: true,
    realFaceMode: 'all', // none, auto, all
    useCDN: false,
    useHeic: true,
    resizeUploadedImage: 1400,
    isShowDocumentTypeSelect: false,
    autoStart: true,
    allowSubmitWithWarnings: true,
    isShowGuidelinesButton: true,
    showSubmitBtn: true,
    playPreviewAnimations: false,
    language: 'en',
    networkUrl: 'networks', // Всегда должно быть таким значением для режима разработки
    // из-за того, что чанки должны лежать в той же директории, что и idvc.js файл
    captureTimeout: 22,
    modalPosition: 'center',
    autocaptureConfidence: 0.8,
    documentTypes: [
        {
            type: 'DL',
            steps: [
                // { type: 'front', name: 'Document\'s Front Image', mode: { uploader: false, video: true }, enableDesktopNotification: true, autocaptureDelay: 2000 },
                // { type: 'pdf', name: 'Document\'s Back Image', enableFourCornerCapture: true, enableDesktopNotification: true, mode: { uploader: false, video: true }, autocaptureDelay: 0 },
                { type: 'face', name: 'User\ Selfie', mode: { uploader: false, video: true } },
            ],
        },
        // {
        //     type: 'IC',
        //     steps: [
        //         { type: 'front', name: 'Document\'s Front Image', mode: { uploader: true, video: true }, enableDesktopNotification: true, autocaptureDelay: 2000 },
        //         { type: 'pdf', name: 'Document\'s Back Image', enableFourCornerCapture: true, enableDesktopNotification: true, mode: { uploader: true, video: true }, autocaptureDelay: 0 },
        //         { type: 'face', name: 'User\ Selfie', mode: { uploader: true, video: true } },
        //     ],
        // },
        // {
        //   type: 'DL',
        //   steps: [
        //     { type: 'front',
        //         name: 'Document\'s Front Image',
        //         mode: { uploader: false, video: true },
        //         enableDesktopNotification: true,
        //         autocaptureDelay: 2000
        //     },
        //     { type: 'pdf',
        //         name: 'Document\'s Back Image',
        //         enableFourCornerCapture: true,
        //         enableDesktopNotification: true,
        //         mode: { uploader: false, video: true },
        //         autocaptureDelay: 0
        //     },
        //     { type: 'face',
        //         name: 'User\ Selfie',
        //         mode: { uploader: false, video: true },
        //     },
        //   ],
        // },
        // {
        //   type: 'VIN',
        //   steps:[
        //     { type: 'photo', name: 'VIN' },
        //   ],
        // },
        // {
        //     type: 'Barcode',
        //     steps:[
        //         { type: 'barcode', name: 'Barcode detection' },
        //     ],
        // },
        // {
        //     type: 'Passport',
        //     steps:[
        //         // { type: 'front', name: 'Passport Front' },
        //         { type: 'mrz', name: 'Passport MRZ', enableFourCornerCapture: true, mode: { uploader: true, video: true } },
        //         { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        //     ],
        // },
        // {
        //     type: 'PassportCard',
        //     steps:[
        //         { type: 'front', name: 'Document Card Front' },
        //         { type: 'mrz', name: 'Passport Card Back', enableFourCornerCapture: true, mode: { uploader: true, video: true } },
        //         { type: 'face', name: 'User Selfie', mode: { uploader: true, video: true } }
        //     ],
        // },
        // {
        //     type: 'GreenCard',
        //     steps:[
        //         { type: 'front', name: 'Document Front' },
        //         { type: 'mrz', name: 'Passport Back', mode: { uploader: true, video: true } },
        //         { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        //     ],
        // },
        // {
        //     type: 'InternationalId',
        //     steps: [
        //         { type: 'front', name: 'Document Front', mode: { uploader: true, video: true }, enableDesktopNotification: true, autocaptureDelay: 3000 },
        //         { type: 'back', name: 'International Back', enableFourCornerCapture: true, mode: { uploader: true, video: true } },
        //         { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
        //     ]
        // },
    ],
    submit(data) {
        console.log('submit');
        console.log(data);

        (async () => {
            const {steps} = data;
            const videoBlob = steps.find(_ => Boolean(_.videoBlob))?.videoBlob;

            if (!videoBlob) {
                console.warn('No videoBlob found in steps');
                return;
            }

            const formData = new FormData();
            formData.append('file', videoBlob, 'recording.webm');

            const API_URL = 'http://datasink.idscan.loc/DataSet';

            const url = new URL(API_URL);
            url.searchParams.append('idempotencyKey', Date.now().toString());

            url.searchParams.append('fileExtension', '.webm');

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        })()


    },
    onChange(data) {
        console.log('onChange');
        console.log(data);
    }
}

const idvcWidget = new IDVC(config)

window.IDVC = idvcWidget

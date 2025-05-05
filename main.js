import IDVC from '@idscan/idvc2'
// import '@idscan/idvc2/dist/css/idvc.css'

const developKey = 'eyJwZGY0MTdrZXkiOiJrMVlRNW1YY1Vtc0k1NGgyWnQwRklCcnhCeEEwYk5NNUY2aU95Y3FYdjdnRi80NmxaT2NhSTBJOGR4MjA3N09UcFRXSmZmTzJkVXdhNW9LSXRrQUlvRS9UTjZaZFQ3RWhEajNNcWRWNW1OTUEzS2lyL2Q1aGVWTllwMzFPa3d5YUFjT2F1V1o2cnhVWExtVjZwak52bVJ1TnVXbkRhWnFwNW1SWnVjTDZ5LzA9IiwiaW1hZ2VQcm9jZXNzaW5nS2V5IjoiRXdGZWtraEZTeUVERmt5dTd0TGF5aDhwUkJDUUZ6M1Z6VnFRTkEwRVhVaUlJTGFZTmJzNytwaENKNmpjbWxwUFdlYkF1WCtOUzRWN1orQUlYemJzZWM2R1gxRDdQbkRVS3dxZ29KcGdhZDZFYlRSOXh2OGkvWEZvYU5nc1AvWnZ2MVAwNG9Ia2NlWGpiM01td1pmYStSeUk5ajdLbDlFS2ZjV2tKNjBHSStjPSIsInRyYWNrU3RyaW5nUGFyc2VyS2V5IjoiZEFHdjM4VlMwTHZ2TCtuYkloK2Q4TzBCcW5ZTjhEZUZEQTBFZVhmTk5aTmtkWmgrNDA3SlFQKzM5bS9hcGE1MkJTTjg3NUF1R3lVbEoyamYvNzBJRWhhQWx5eWQxZWRkVFNla1FrakdDUXNSbzlnNHFMaU12VU1tN2tRMVVnMityK2dRVnQ5eVlhWUN0UDJiTUN3UXllY1FmdGQ5MDF3NkJ0ZHdUaTZhV2l3PSIsImNvbW1vbkxpY2Vuc2VLZXkiOiJJUVBVZElTUC9YaXpBdDNuOWE0VmZwUS8zcGpwc1Nlc0ZZQkRNb0lvcWFENThqajJkQytnWEVNNS9RVStWUmNSZEhuVjBCaDdjVGhPMVNRTWVzTUt1anhvSE9aSWp4eWQxRUxtMi81Z2RFMWdYblpubEpxZVpVd3NFOGlGTi9ERXBIeEw4emRTT3NlTDVZMlROTnB5Q0R1dmllTXc3dTFBMHpJSWF3YTVDMGc9In0='
const prodKey = 'eyJwZGY0MTdrZXkiOiJmZUdmb2NKZlhaaG40MDVoTW15Q3pSOXJCWXJXRnZ3Ui9lZ1dIQlJPTW9xVXdvMWttb1dCR3lPanpYaTlaVXJlNTMvb2MxRmdHZUZQMmxnNUV2TGxKZmFxZjFHMEpOMC9JS3ZzQWxoS3RLL2h2XHUwMDJCM25cdTAwMkJHQ0RrTDRQODNVTVRQRmxmVzRpVVRYQ2JTRTBcdTAwMkIvb2M0c0tPTzdadWRIYmhmeGNrQXNxUTU2amhlYUk9IiwiY29tbW9uTGljZW5zZUtleSI6IjBMcVpyOUc4NWhGLzZXdXZNY3Y3cWgzWFN0V2lMQUFCcUlYNmpPRWdoc25YMlhcdTAwMkJHWXAyb3o1NlE3eGIwRS9GTG9qZzQ2VGxFdnlmbkM1ZTZqVm1PbVhmLzh1WlBReURPMmNQN1x1MDAyQjAzQzJZcjc5SFx1MDAyQnNLbjlvR3E2WkQ5c3lkUU5PNjV6V0tMUnJcdTAwMkJROTBvQnBSYmJUb2F3TGpwb1FSQS9BNFpmMlZuYktTemw0PSIsImltYWdlUHJvY2Vzc2luZ0tleSI6Im10T05KcjJHQ2ZMQmpITlx1MDAyQjQySFJRb1x1MDAyQjhocVBUTXFLTUVQUWZiXHUwMDJCRVZPd2hFMGNodENBcU9NSGExTTFcdTAwMkJvUG5iNm52S3FydGFcdTAwMkJ4S3VPRjlQODFQU3IyRkk3empKMmNqQm1ZY2xkZDZpaFJ3VzY2elx1MDAyQldTUHJiaGdRUGNkNklsVVNNa1hYOFZjYXNYelZnbnI0WGxQWnBoNEViaUMwTTdINEs0MVN4YmhnemhuVT0iLCJ0cmFja1N0cmluZ1BhcnNlcktleSI6IncyT1dhVHZiV0dpN2U3aFl4OHpGSlBSS1pieUFBdDM5V3ZjRC92MmNTRzhqb0ZLZlpsNkgyOWxvVHFrNUp3cnZHOS9wWnpNRDVTWjNyZS9ySHJsQ041enkxTkpud0pLWG9TZkprMW03cEZzODdxUDI3S2J2djhzMWJhWWplXHUwMDJCTENLaWd3TWRiMHN1WVluWTJEZXJUd1V6ODY0WFl5eUFxMDZ1T21jMjdlVTlzPSIsImlPU01SWkRldGVjdG9yS2V5IjoiUDc5M1lRL2lxSHVjeW1OTGR3V3JBV2VaRXNYdnZkcXE0c21TaU9yMXg4Tmd3c3doSjV2Zk5QMkYwSnp0VVlxRDlhVEw5WU5vXHUwMDJCa2Qydkx5VU1GWmY5cTd6THE2RjFraVx1MDAyQkxMR1BFZ3lTY1l5d1MvOFN1NjJaTEtYVHBjLzNLaDN2MUhEN2MzajQ4dkw2Y00yRlc2UW1XVXFoSk1RdHVlRzUvZHZaYXU3R1F3TT0iLCJpT1NQREZEZXRlY3RvcktleSI6ImlKZFB2RmNLMkktT3NIdE1hTW5JZE0uUHZQZUVySmNDZUdsQi5MYUxwTnBEIn0='
// http://10.105.74.121/
const sharedDevelopKey = 'ew0KICAicGRmNDE3a2V5IjogIkwzQ0FOWTFVaURXK1JpZDlUZnI0cEVJZ1kxdnRzNnRPbysycGE2dFR4cFIvbmlBTTk4NDN0ejdDaHpKOXNQZ29hS3Urc280Y3BiMHZyMVJ1QlBlSWhYRXRNanZIZ0haSnBxUFZzU01XS3VQaXFaaERlWGpkWDkxRVVBeHB0cWs4S2dpVDh2NnlhdTBMOEwrR3dJQXp2S3NWT0ZiK1ArSFh6RHBKVThpOE14dz0iLA0KICAiaW1hZ2VQcm9jZXNzaW5nS2V5IjogIkNIdlBYNEVVRjExMlFYV1FvVHVSNThwWFNTOUs0TDlyb3NnQndnckF6eklVb2ZNV3lFM2RLRUI0ZDQzb2l2eUYxcnQzd3dXamhGbVVjeTlQbVdpVzg2NEs2bytkNzFUK1IxOS9aaFNieDNJR0g4QUtnSEpIcktSWUxYOWtJUUc5NU51c1RwTUpndExXK1puc29PZGxRRFRmVVFibG9zQTNRaE42akpJSU5KUT0iLA0KICAidHJhY2tTdHJpbmdQYXJzZXJLZXkiOiAiT3d3cnBXWEV5d1YxK3NZUUFtU2kwdW11akhraDV2U2Ixd0paV3B0SXk2MG5YR0l2NytBNHpyaHdEaTFtWkF3Q1BYcmJ0ZndIcTAwZnBFOEh0ZTVVZks1Y3ZOMWYxWnFoU3o0MGdPSStuNzNwNzlJUDhlVGNPRklDbGhheVZwU2lBR2RvaUtNZFc5M2w5cE5PamZxeFZDN2hqUlBHQ21mWS9vS3VUSEdzTDhvPSIsDQogICJjb21tb25MaWNlbnNlS2V5IjogImVqTTkwZENta3h6QXFTQlNaNVUxTFB3OTNwcmo4cU9mK3ZEcjlRZ0ZhTTdhcTdOVm1jNGJBQXJVMEk0R0FaeDllbk9ENkp1cTlyZlgzcXdkdW9waUgrNjNsQUgxaUlzeDBEZDJGTldlNGVLRUxMVE83d3NJL2IycUtCa0xNTUloS2JsdmNJbE9yVWtoU01tWHRzeEwrekhOUVJHTldzdGNjMVNhZUgyS0JIND0iLA0KICAiaU9TTVJaRGV0ZWN0b3JLZXkiOiAiRjJIUXBaNm10a1hVUU9FaEJYajFjWGxlUGpoQjI2UWdNOUpPVE1mekQ5NEtONStXMUdNY2huVHdVeVV3NTB3ZGFrT2FJWFlGWnFHUVZueUl0VnV3eTR1dElLdXdPU0tqOEhrMGIvZk5Ca3BrbGpXb1lqQnNNRDZFWWZUa2ZMb3JSSUhsbGtLOU5HVFJFNmpSRUV1OVdleHFjK3pDK2pFL1NCL0ZBemhkMDZFPSIsDQogICJpT1NQREZEZXRlY3RvcktleSI6ICIxQjBLLkIxUDBNNU8uRzdJNE4uTDFEMkExTHdDdE9lSSINCn0='

const config = {
    licenseKey: prodKey,
    el: "videoCapturingEl",
    autoContinue: true,
    fixFrontOrientAfterUpload: true,
    realFaceMode: 'all', // none, auto, all
    useCDN: false,
    useHeic: true,
    resizeUploadedImage: 1400,
    isShowDocumentTypeSelect: true,
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

        url.searchParams.append('fileExtension', 'webm');

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
    },
    onChange(data) {
        console.log('onChange');
        console.log(data);
    }
}

const idvcWidget = new IDVC(config)

window.IDVC = idvcWidget

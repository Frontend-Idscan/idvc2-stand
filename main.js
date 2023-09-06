import IDVC from '@idscan/idvc2'
import '@idscan/idvc2/dist/css/idvc.css'

const developKey = 'eyJwZGY0MTdrZXkiOiJrMVlRNW1YY1Vtc0k1NGgyWnQwRklCcnhCeEEwYk5NNUY2aU95Y3FYdjdnRi80NmxaT2NhSTBJOGR4MjA3N09UcFRXSmZmTzJkVXdhNW9LSXRrQUlvRS9UTjZaZFQ3RWhEajNNcWRWNW1OTUEzS2lyL2Q1aGVWTllwMzFPa3d5YUFjT2F1V1o2cnhVWExtVjZwak52bVJ1TnVXbkRhWnFwNW1SWnVjTDZ5LzA9IiwiaW1hZ2VQcm9jZXNzaW5nS2V5IjoiRXdGZWtraEZTeUVERmt5dTd0TGF5aDhwUkJDUUZ6M1Z6VnFRTkEwRVhVaUlJTGFZTmJzNytwaENKNmpjbWxwUFdlYkF1WCtOUzRWN1orQUlYemJzZWM2R1gxRDdQbkRVS3dxZ29KcGdhZDZFYlRSOXh2OGkvWEZvYU5nc1AvWnZ2MVAwNG9Ia2NlWGpiM01td1pmYStSeUk5ajdLbDlFS2ZjV2tKNjBHSStjPSIsInRyYWNrU3RyaW5nUGFyc2VyS2V5IjoiZEFHdjM4VlMwTHZ2TCtuYkloK2Q4TzBCcW5ZTjhEZUZEQTBFZVhmTk5aTmtkWmgrNDA3SlFQKzM5bS9hcGE1MkJTTjg3NUF1R3lVbEoyamYvNzBJRWhhQWx5eWQxZWRkVFNla1FrakdDUXNSbzlnNHFMaU12VU1tN2tRMVVnMityK2dRVnQ5eVlhWUN0UDJiTUN3UXllY1FmdGQ5MDF3NkJ0ZHdUaTZhV2l3PSIsImNvbW1vbkxpY2Vuc2VLZXkiOiJJUVBVZElTUC9YaXpBdDNuOWE0VmZwUS8zcGpwc1Nlc0ZZQkRNb0lvcWFENThqajJkQytnWEVNNS9RVStWUmNSZEhuVjBCaDdjVGhPMVNRTWVzTUt1anhvSE9aSWp4eWQxRUxtMi81Z2RFMWdYblpubEpxZVpVd3NFOGlGTi9ERXBIeEw4emRTT3NlTDVZMlROTnB5Q0R1dmllTXc3dTFBMHpJSWF3YTVDMGc9In0='
const prodKey = 'eyJwZGY0MTdrZXkiOiJIY1lGUWE4M3pUWjIxRXpadFJleGpXMUpvZkFHNFRhRGViOU5YK3N1aklxSDZ5ZFpMMjlYNlozZzhpeC9PR3p1d2xkekdWWElBVlA2UlZaelJ6ZjNUR0Zlb3NZWVY1Yi9xeDRsT1JQWm1kOFd6UEk4ZEpEalFsRXV0M2ZjdTQrMzdvUmxxZEUxVHJTMTNrNURHTUlLOWMzSWhUQ3AvWmtnL2ZyUnNKb1l6OXc9IiwiaW1hZ2VQcm9jZXNzaW5nS2V5IjoiWXNnSmkxeVJBRndwVzFIelR4Ukd0T2Jtc1YrNWFZRmYveHJxb2I5QVl4dG5WNTcvSll3UG9MQlFGRDJ3enhrZ05QMzJBR1pBeUdMVlNLaTRkWmN5TlVQNkZaOXBuR1dic3kvZ0h3WFl6K25rRm5iQkw1RjVTQklnZEcyNmZBb1k1eVhxcnpudjVkNkhtSktHdysrU3MvakpGRWhJVjlMbnJ2N01ldU81bXVVPSIsInRyYWNrU3RyaW5nUGFyc2VyS2V5IjoiMEtiSGdLYi9CSDcwbWdmU1ZSelBEdE1JU1hGRTkzSENYVHRWWlEwQzVtTUdVRlZJc3JTZFA5am94bkdCajFrUDJZdmU0R2Rud254ZmtDV0U1ZTZwa3o3MkVqKy9tRWpPNExUQjZjei9lM0ZERVZ2MzRTcnRnTE5vVmxmT29kalBpZldLeE84QzV2QlV2S0pYOUpNMDJyOVQybG93OGNCdWxnczNhZlZYM1M0PSIsImNvbW1vbkxpY2Vuc2VLZXkiOiJTSHQwRU5ERTUxOGJWN3NickpNNHF5M2xHZ3hnMVE3cHQzSXpWeUZMWkZKRFRtdDNmSTJsK0FjSUpMNUZ3Tjh6OSs2c05tNlpxcC9CRWxvQlZOdEhvTkN0ZXR6QUtERTFVMk1tNE5JU1ZMRDBQdWpMWUdrOG04VXRSU1Nwa1IxQUtkeFUycHkrWXNXWHUyVjg1K0tXRDVCbWhkcC9iRXNHVVpObGQzdXpBNFU9In0='

const config = {
    useCDN: false,
    licenseKey: prodKey,
    fixFrontOrientAfterUpload: true,
    el: "videoCapturingEl",
    isShowDocumentTypeSelect: false,
    isShowGuidelinesButton: false,
    resizeUploadedImage: 1500,
    autoContinue: true,
    realFaceMode: 'auto',
    documentTypes: [
        {
            type: 'ID',
            steps: [
                { type: 'front', name: 'Document Front', mode: { uploader: false, video: true } },
                { type: 'pdf', name: 'Document PDF417 Barcode', mode: { uploader: false, video: true } },
                { type: 'face', name: 'Face', mode: { uploader: false, video: true } }
            ]
        },
        {
            type: 'Passport',
            steps: [
                { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
                { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
                // { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
            ]
        },
        {
            type: 'PassportCard',
            steps: [
                { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
                { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
                // { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
            ]
        },
        {
            type: 'GreenCard',
            steps: [
                { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
                { type: 'mrz', name: 'Passport Front', mode: { uploader: true, video: true } },
                // { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
            ]
        },
        {
            type: 'InternationalId',
            steps: [
                { type: 'front', name: 'Document Front', mode: { uploader: true, video: true } },
                { type: 'back', name: 'Passport Back', mode: { uploader: true, video: true } },
                // { type: 'face', name: 'Face', mode: { uploader: true, video: true } }
            ]
        },
    ],
    submit(data) {
        console.log('submit');
        console.log(data);
    },
    onChange(data) {
        console.log('onChange');
        console.log(data);
    }
}

const idvcWidget = new IDVC(config)

window.IDVC = idvcWidget

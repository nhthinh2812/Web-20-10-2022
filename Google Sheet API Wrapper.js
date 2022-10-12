//IMPORTANT INFORMATION, PLEASE DO NOT CHANGE!
const API_KEY = "AIzaSyA1HRbevVpAUtDj6UCiPuddd7B2bpNEi50";
const Discovery_Document = "https://sheets.googleapis.com/$discovery/rest?version=v4";
const Sheet_ID = "1ZRVC_E3Ycd5D6KtXrpDgzHKiehPKSRuHan_OlPYMyEA";
const Scope = "https://www.googleapis.com/auth/spreadsheets";
const serviceAccountArgs = {
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4pdZdPxNskHTk\nchcZ1hzlBCoDtCShGUkE13763ZEUKqoBOQ3AksEO+uDo8gNhEQYZLR6tJu+ap70h\ndotxLO7pJpEQQXbMI2meQbkscDqSWq+1Nci8GyqeUxjYE4KBEoB9tAVWHRj0hSyo\nj4aAr2SgxujqyaMlu/Q/4he/rBpEc4c7hP4GMEXMMaTtUh+b/05nk4eyJoUYBTjy\nIQjOApKf2vLQuVX88xbFbYwADrKEPpAleb4qq8llja73dGf9pzy9lnTYGEW6O9sQ\nXU7K7lUB1Xb8vYsRs6ygQUNT5H+2wKfrd8DZ+LiSsp/DGzJZMt1LyBuiIc6U2Pri\n1K6eTzHdAgMBAAECgf8Mn0mIFke9pCJZe3MY0QoonaBBoI7gdFoJerGzdHH2bvQw\nITZPc7i+zWeShPi2KfPAxNTUAVVfvRewsenWUrwCNCC2e8MjMUiHCPcfkoxudMSO\nHp8aPMEtEYEhRDQnnpwp+6Rhvpt2G6Rx4V3Qbizy0KYbZq1AZxjLRSlacOlaxG0F\nRFpFaM8hpRdRMtI2vjhaGL1I9JQDDeIiYQ0xZi5yYWPAcrZSyRGiSywOwWbp9bu6\n9hs0KP4WObcBh+YLKV7F97PfjsLFa8YxvAQNW3bytLijtOs/sjW7Ww6tEvv1sm7Y\nMq6EQoM6uFsu+F6ECiWEWn7AIdvZOqWecXQpHDECgYEA9k7J5k9pt8BgotuZvAXE\nYcHVKQUc5g0Ce8cmq1tC4K3ZkHIs/9LaZDhymubrsSZK4ZsGMqyzaatZAnIVdTN2\nq/CKUoPYpRVrRr2RLg0dWHK8vTKoRAuvqpuAYXPqy0apWqIIJPWrNF6bHIChnYWO\nyJ5iQGIaLPB+FWAEWoDd1ekCgYEAv+no1VPbUu87d6cVc39ZJcWuZ7jRG90wKB/T\nE0BFMIqzUc6izok3h9giWax7XfmScT5173oSwoPRLMrrUMlPFWkFK/irYVGyqJR/\n6VlFxORfZEd60qU/IFRATx/hasyGldJ92pSzfQwdk0xUPUKwVa1lrdfENDVa9lzs\nhcwNH9UCgYEA7MqwJX9BFkuXW9ocwPsWYhjzsZzdvHjTY2YBUgnJkLDyEYECq+rs\n1B7EZxELk+JJaP0dh0gqr7LwPn6pDGSuePwmLs/cTlD6Mib61Lf891RPCOETjV9i\nwXT/hjDnkAddtulBRS79KbquCkfLl+GXdF13/YeSvJNz017csJllK0kCgYEAiJ79\nePikl0rl281fkQRks2YiPYatnpd9E+NsATVszBzBgYiIEF5Q4O01rv8CKClmXiXo\nEV6nAkCS5b9je/SDzysfWmlBoBtoA2kMElPSPlORsTLNti2bXel8ipeYgs4tNXVO\n0Q+xI2E/oL/i7GWQYL37N6H19HDTW7VVT/6ujS0CgYEAmuOquyEBoLgSqWZaEYAn\nmx1HP38j4QvXW69Ct45MpwFIKo9x7J4F+x2B7bbi7mzCkz8MIgxCw8SUwNG5jI+V\n8JkjIvmseA99h9/KiZUR+Yd8Lhy8UYWy77Z8J2UecAICH4RXBXuvwGPVv1jCvAkD\n62P8hpEZiN4PREnQ2zd4YPU=\n-----END PRIVATE KEY-----\n",
    client_email: "web-20-10-2022@web-20-10-2022.iam.gserviceaccount.com",
    scopes: [Scope]
};

document.write('<script src="https://cdn.jsdelivr.net/gh/tanaikech/GetAccessTokenFromServiceAccount_js@master/getaccesstokengromserviceaccount_js.min.js"></script>');
document.write('<script async defer src="https://apis.google.com/js/api.js"onload="handleClientLoad()"></script>')
document.write('<meta content="text/html;charset=utf-8" http-equiv="Content-Type">');
document.write('<meta content="utf-8" http-equiv="encoding">');


finishedLoading = false;

async function handleClientLoad() {
    await gapi.load("client", async () =>
    {
        await gapi.auth.setToken(await GetAccessTokenFromServiceAccount.do(serviceAccountArgs));
        await initGoogleAPI().then(() => finishedLoading = true);
        await run();
    });
}

async function initGoogleAPI()
{
    await gapi.client.init({
        discoveryDocs: [Discovery_Document],
        apiKey: API_KEY
    });
}


async function run() 
{
    //Read Example:
    read("Data").then((req) => console.log(req)); //Read every cells in sheet 'Data'
    read("Data!A1:B2").then((req) => console.log(req)); //Read every cells in the rectangle A1:B2 'Data'
    read("Data!A1:1").then((req) => console.log(req)); //Read every cells in row A1 'Data'

    //Write example
    write("Data!A3:C3", [["Nguyễn Văn C", "Nguyễn Thị B", "Ngày 20/10 tôi xin dành tặng bạn lời chúc sức khỏe, vui vẻ, hát hay như chim sẻ, và có nhiều tài lẻ, nói chung là làm gì cũng suôn sẻ."]], "ROWS").then((req) => console.log(req));
}

//parameter: "range" : the range of cells will be read
//Following Google's A1 syntax: https://developers.google.com/sheets/api/guides/concepts#cell
//Example : "Sheet1!A1:B2", "Sheet1!A:A", "Sheet1!1:2", "Sheet1!A5:A", "A1:B2"
async function read(range = "") {
    if (finishedLoading === false)
    {
        console.log("All of the necessary resources has not finished being loaded, please try again later!");
        return;
    }

    readParams = { spreadsheetId: Sheet_ID, range: range };

    req = await gapi.client.sheets.spreadsheets.values.get(readParams);
    return req.result;
}

//parameter: "range" : the range of cells will be read
//Following Google's A1 syntax: https://developers.google.com/sheets/api/guides/concepts#cell
//Example : "Sheet1!A1:B2", "Sheet1!A:A", "Sheet1!1:2", "Sheet1!A5:A", "A1:B2"
//parameter: "values" : the values that will be written to the desired cells
//It's a 2D array, the outer array consists of columns while the inner array consists of rows
//(It could be rows then columns if "majorDimension" is set to "COLUMNS").
//E.g: [["Hello", "World"], [1, 2]] => write "Hello World" in row 1, "1 2" in row 2 
//parameter : "majorDimension" : decides if we'll write in rows or columns first (default is rows)
//2 Possible value is "COLUMNS" or "ROWS"
async function write(range = "", values = [[]], majorDimension = "ROWS") 
{
    if (finishedLoading === false)
    {
        console.log("All of the necessary resources has not finished being loaded, please try again later!");
        return;
    }

    if (majorDimension !== "ROWS" && majorDimension !== "COLUMNS")
    {
        throw new Error("Major dimension parameter is set incorrectly (it should only be 'ROWS' or 'COLUMNS'");
    }

    writeParams = { spreadsheetId: Sheet_ID, range: range, valueInputOption: "RAW", resource: { values: values, majorDimension : majorDimension } };

    req = await gapi.client.sheets.spreadsheets.values.update(writeParams);
    return req;
}

//https://developers.google.com/sheets/api/guides/values#appending_values
//According to the Google API, this function is kinda shitty and you better use "write()" instead
//parameter: "range" : the range of cells will be read
//Following Google's A1 syntax: https://developers.google.com/sheets/api/guides/concepts#cell
//Example : "Sheet1!A1:B2", "Sheet1!A:A", "Sheet1!1:2", "Sheet1!A5:A", "A1:B2"
//parameter: "values" : the values that will be appended to the desired cells
//It's a 2D array, the outer array consists of columns while the inner array consists of rows
//(It could be rows then columns if "majorDimension" is set to "COLUMNS").
//E.g: [["Hello", "World"], [1, 2]] => write "Hello World" in row 1, "1 2" in row 2 
//parameter : "majorDimension" : decides if we'll write in rows or columns first (default is rows)
//2 Possible value is "COLUMNS" or "ROWS"
async function append(range = "", values = [[]], majorDimension = "ROWS")
{
    if (finishedLoading === false)
    {
        console.log("All of the necessary resources has not finished being loaded, please try again later!");
        return;
    }

    if (majorDimension !== "ROWS" && majorDimension !== "COLUMNS")
    {
        throw new Error("Major dimension parameter is set incorrectly (it should only be 'ROWS' or 'COLUMNS'");
    }

    appendParams = { spreadsheetId: Sheet_ID, range: range, valueInputOption: "RAW", resource: { values: values, majorDimension : majorDimension } };
    
    req = await gapi.client.sheets.spreadsheets.values.append(appendParams);
    return req;
}

//parameter: "range" : the range of cells will be cleared
//Following Google's A1 syntax: https://developers.google.com/sheets/api/guides/concepts#cell
//Example : "Sheet1!A1:B2", "Sheet1!A:A", "Sheet1!1:2", "Sheet1!A5:A", "A1:B2"
async function clear(range = "") 
{
    if (finishedLoading === false)
    {
        console.log("All of the necessary resources has not finished being loaded, please try again later!");
        return;
    }

    clearParams = { spreadsheetId: Sheet_ID, range: range };

    req = await gapi.client.sheets.spreadsheets.values.clear(clearParams);
    return req;
}



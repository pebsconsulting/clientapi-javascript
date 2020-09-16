# cervinodata-api-client

CervinodataApiClient - JavaScript client for cervinodata-api-client
<div style='margin: 2em 0;'>
 <p>
 Before you get going with the Cervinodata API, set up Cervinodata (read the support page here: <a href='https://support.cervinodata.com/hc/en-nl/articles/360004363237' target='_blank'>How to set up the Cervinodata API</a>).
 </p>
<h3>To use the Cervinodata API, you need all of the following:</h3>
<p>
<ol>
<li>An active Cervinodata account, you can start a free trial <a href='https://app.cervinodata.com/register' target='_blank'>here</a></li>
<li>At least one connection to a platform (check <a href='https://app.cervinodata.com/data-sources-connections' target='_blank'>here</a>)</li>
<li>At least one account switched ON (check <a href='https://app.cervinodata.com/accounts' target='_blank'>here</a>)</li>
<li>At least one data refresh executed (check <a href='https://app.cervinodata.com/manual-data-refresh' target='_blank'>here</a>)</li>
<li>An active API token (check <a href='https://app.cervinodata.com/settings#/api' target='_blank'>here</a>)</li>
</ol>
</p>
<p>
Note that limits apply for <a href='https://support.cervinodata.com/hc/en-nl/articles/360009250458-Limits-for-Free-plan-users' target='_blank'>Free plan users</a>.
</p>
<p>
If you wish to automate your Cervinodata API connection, check out the list of client API's at <a href='https://github.com/Cervinodata' target='_blank'>https://github.com/Cervinodata</a>.
</p>
</div>
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 0.1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cervinodata-api-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your cervinodata-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/cervinodata/clientapi-javascript
then install it via:

```shell
    npm install cervinodata/clientapi-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CervinodataApiClient = require('cervinodata-api-client');

var defaultClient = CervinodataApiClient.ApiClient.instance;
// Configure Bearer access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new CervinodataApiClient.AdvertisingDataApi()
var organisationUuids = ["null"]; // {[String]} Organisation uuids
var opts = {
  'fromDate': new Date("2013-10-20"), // {Date} From date
  'dateFormat': "dateFormat_example", // {String} Outputted date format
  'format': "format_example" // {String} Output format (use csv for large result sets)
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAdAccountReportPerOrganisationPerDay(organisationUuids, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://app.cervinodata.com/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CervinodataApiClient.AdvertisingDataApi* | [**getAdAccountReportPerOrganisationPerDay**](docs/AdvertisingDataApi.md#getAdAccountReportPerOrganisationPerDay) | **GET** /data/ad-account-report-per-organisation-per-day/{organisationUuids} | Return ad account report per organisation per day
*CervinodataApiClient.AdvertisingDataApi* | [**getAdAccounts**](docs/AdvertisingDataApi.md#getAdAccounts) | **GET** /data/ad-accounts/{organisationUuid} | Return ad accounts by organisation
*CervinodataApiClient.AdvertisingDataApi* | [**getAdCampaignReportPerDay**](docs/AdvertisingDataApi.md#getAdCampaignReportPerDay) | **GET** /data/ad-campaign-report-per-day/{organisationUuid} | Return ad campaign report per day by organisation
*CervinodataApiClient.AdvertisingDataApi* | [**getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay**](docs/AdvertisingDataApi.md#getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay) | **GET** /data/ad-campaign-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids} | Return ad campaign report per organisation per account per campaign per device per day
*CervinodataApiClient.AdvertisingDataApi* | [**getAdCampaignReportPerOrganisationPerAccountPerDay**](docs/AdvertisingDataApi.md#getAdCampaignReportPerOrganisationPerAccountPerDay) | **GET** /data/ad-campaign-report-per-organisation-per-account-per-day/{organisationUuids} | Return ad campaign report per organisation per account per day
*CervinodataApiClient.AdvertisingDataApi* | [**getAdCampaigns**](docs/AdvertisingDataApi.md#getAdCampaigns) | **GET** /data/ad-campaigns/{organisationUuid} | Return ad campaigns by organisation
*CervinodataApiClient.AdvertisingDataApi* | [**getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay**](docs/AdvertisingDataApi.md#getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay) | **GET** /data/facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids} | Return facebook ad extended report per organisation per account per campaign per device per day
*CervinodataApiClient.AdvertisingDataApi* | [**getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay**](docs/AdvertisingDataApi.md#getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay) | **GET** /data/google-ads-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids} | Return google ads report per organisation per account per campaign per device per day
*CervinodataApiClient.AdvertisingDataApi* | [**getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/AdvertisingDataApi.md#getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/linkedin-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return linkedin ads extended report per organisation per account per campaign per day
*CervinodataApiClient.AnalyticsDataApi* | [**getViews**](docs/AnalyticsDataApi.md#getViews) | **GET** /data/views/{organisationUuid} | Return views by organisation
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getAnalyticsReportPerCampaignPerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getAnalyticsReportPerCampaignPerDay) | **GET** /data/analytics-report-per-campaign-per-day/{organisationUuid} | Return analytics report per campaign per day by organisation
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getAnalyticsReportPerChannelGroupPerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getAnalyticsReportPerChannelGroupPerDay) | **GET** /data/analytics-report-per-channel-group-per-day/{organisationUuid} | Return analytics report per channel group per day by organisation
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getAnalyticsReportPerDevicePerChannelGroupPerOrganisationPerViewPerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getAnalyticsReportPerDevicePerChannelGroupPerOrganisationPerViewPerDay) | **GET** /data/analytics-report-per-device-per-channel-group-per-organisation-per-view-per-day/{organisationUuids} | Return analytics report per device per channel group per organisation per view per day
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getAnalyticsReportPerDevicePerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getAnalyticsReportPerDevicePerDay) | **GET** /data/analytics-report-per-device-per-day/{organisationUuid} | Return analytics report per device per day by organisation
*CervinodataApiClient.AnalyticsDataDefaultMetricsApi* | [**getAnalyticsReportPerSourceMediumPerDay**](docs/AnalyticsDataDefaultMetricsApi.md#getAnalyticsReportPerSourceMediumPerDay) | **GET** /data/analytics-report-per-source-medium-per-day/{organisationUuid} | Return analytics report per source medium per day by organisation
*CervinodataApiClient.AnalyticsDataGoalsApi* | [**getAnalyticsGoalReportPerCampaignPerDay**](docs/AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerCampaignPerDay) | **GET** /data/analytics-goal-report-per-campaign-per-day/{organisationUuid} | Return analytics goal report per campaign per day by organisation
*CervinodataApiClient.AnalyticsDataGoalsApi* | [**getAnalyticsGoalReportPerChannelGroupPerDay**](docs/AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerChannelGroupPerDay) | **GET** /data/analytics-goal-report-per-channel-group-per-day/{organisationUuid} | Return analytics goal report per channel group per day by organisation
*CervinodataApiClient.AnalyticsDataGoalsApi* | [**getAnalyticsGoalReportPerDevicePerDay**](docs/AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerDevicePerDay) | **GET** /data/analytics-goal-report-per-device-per-day/{organisationUuid} | Return analytics goal report per device per day by organisation
*CervinodataApiClient.AnalyticsDataGoalsApi* | [**getAnalyticsGoalReportPerSourceMediumPerDay**](docs/AnalyticsDataGoalsApi.md#getAnalyticsGoalReportPerSourceMediumPerDay) | **GET** /data/analytics-goal-report-per-source-medium-per-day/{organisationUuid} | Return analytics goal report per source medium per day by organisation
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupAdReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupAdReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-ad-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group ad report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupAdReportPerOrganisationPerDay**](docs/CampaignGroupApi.md#getCampaignGroupAdReportPerOrganisationPerDay) | **GET** /data/campaign-group-ad-report-per-organisation-per-day/{organisationUuids} | Return campaign group ad report per organisation per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupAnalyticsReportPerOrganisationPerDay**](docs/CampaignGroupApi.md#getCampaignGroupAnalyticsReportPerOrganisationPerDay) | **GET** /data/campaign-group-analytics-report-per-organisation-per-day/{organisationUuids} | Return campaign group analytics report per organisation per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupFacebookAdExtendedReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-facebook-ad-extended-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group facebook ad extended report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupFacebookAdReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-facebook-ad-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group facebook ad report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupGoogleAdsReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-google-ads-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group google ads report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay) | **GET** /data/campaign-group-linkedin-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids} | Return campaign group linkedin ads extended report per organisation per account per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupReportPerOrganisationPerDay**](docs/CampaignGroupApi.md#getCampaignGroupReportPerOrganisationPerDay) | **GET** /data/campaign-group-report-per-organisation-per-day/{organisationUuids} | Return campaign group report per organisation per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay**](docs/CampaignGroupApi.md#getCampaignGroupVideoReportPerOrganisationPerCampaignPerDay) | **GET** /data/campaign-group-video-report-per-organisation-per-campaign-per-day/{organisationUuids} | Return campaign group video report per organisation per campaign per day
*CervinodataApiClient.CampaignGroupApi* | [**getCampaignGroupVideoReportPerOrganisationPerDay**](docs/CampaignGroupApi.md#getCampaignGroupVideoReportPerOrganisationPerDay) | **GET** /data/campaign-group-video-report-per-organisation-per-day/{organisationUuids} | Return campaign group video report per organisation per day
*CervinodataApiClient.GenericDataApi* | [**getCampaignGroups**](docs/GenericDataApi.md#getCampaignGroups) | **GET** /data/campaign-groups | Return campaign groups
*CervinodataApiClient.GenericDataApi* | [**getOrganisations**](docs/GenericDataApi.md#getOrganisations) | **GET** /data/organisations | Return organisations


## Documentation for Models



## Documentation for Authorization



### bearerAuth

- **Type**: Bearer authentication


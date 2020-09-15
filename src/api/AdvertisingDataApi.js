/**
 * Cervinodata API documentation
 * <div style='margin: 2em 0;'>  <p>  Before you get going with the Cervinodata API, set up Cervinodata (read the support page here: <a href='https://support.cervinodata.com/hc/en-nl/articles/360004363237' target='_blank'>How to set up the Cervinodata API</a>).  </p> <h3>To use the Cervinodata API, you need all of the following:</h3> <p> <ol> <li>An active Cervinodata account, you can start a free trial <a href='https://app.cervinodata.com/register' target='_blank'>here</a></li> <li>At least one connection to a platform (check <a href='https://app.cervinodata.com/data-sources-connections' target='_blank'>here</a>)</li> <li>At least one account switched ON (check <a href='https://app.cervinodata.com/accounts' target='_blank'>here</a>)</li> <li>At least one data refresh executed (check <a href='https://app.cervinodata.com/manual-data-refresh' target='_blank'>here</a>)</li> <li>An active API token (check <a href='https://app.cervinodata.com/settings#/api' target='_blank'>here</a>)</li> </ol> </p> <p> Note that limits apply for <a href='https://support.cervinodata.com/hc/en-nl/articles/360009250458-Limits-for-Free-plan-users' target='_blank'>Free plan users</a>. </p> <p> If you wish to automate your Cervinodata API connection, check out the list of client API's at <a href='https://github.com/Cervinodata' target='_blank'>https://github.com/Cervinodata</a>. </p> </div>
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@cervinodata.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* AdvertisingData service.
* @module api/AdvertisingDataApi
* @version 0.1.0
*/
export default class AdvertisingDataApi {

    /**
    * Constructs a new AdvertisingDataApi. 
    * @alias module:api/AdvertisingDataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAdAccountReportPerOrganisationPerDay operation.
     * @callback module:api/AdvertisingDataApi~getAdAccountReportPerOrganisationPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return ad account report per organisation per day
     * Ad account report per organisation  per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AdvertisingDataApi~getAdAccountReportPerOrganisationPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAdAccountReportPerOrganisationPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getAdAccountReportPerOrganisationPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/ad-account-report-per-organisation-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAdAccounts operation.
     * @callback module:api/AdvertisingDataApi~getAdAccountsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return ad accounts by organisation
     * Ad accounts by organisation
     * @param {String} organisationUuid Organisation uuid
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.format Output format
     * @param {module:api/AdvertisingDataApi~getAdAccountsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAdAccounts(organisationUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuid' is set
      if (organisationUuid === undefined || organisationUuid === null) {
        throw new Error("Missing the required parameter 'organisationUuid' when calling getAdAccounts");
      }

      let pathParams = {
        'organisationUuid': organisationUuid
      };
      let queryParams = {
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/ad-accounts/{organisationUuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAdCampaignReportPerDay operation.
     * @callback module:api/AdvertisingDataApi~getAdCampaignReportPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return ad campaign report per day by organisation
     * Ad campaign report per day by organisation
     * @param {String} organisationUuid Organisation uuid
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AdvertisingDataApi~getAdCampaignReportPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAdCampaignReportPerDay(organisationUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuid' is set
      if (organisationUuid === undefined || organisationUuid === null) {
        throw new Error("Missing the required parameter 'organisationUuid' when calling getAdCampaignReportPerDay");
      }

      let pathParams = {
        'organisationUuid': organisationUuid
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/ad-campaign-report-per-day/{organisationUuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay operation.
     * @callback module:api/AdvertisingDataApi~getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return ad campaign report per organisation per account per campaign per device per day
     * Ad campaign report per organisation per account per campaign per device per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AdvertisingDataApi~getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getAdCampaignReportPerOrganisationPerAccountPerCampaignPerDevicePerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/ad-campaign-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAdCampaignReportPerOrganisationPerAccountPerDay operation.
     * @callback module:api/AdvertisingDataApi~getAdCampaignReportPerOrganisationPerAccountPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return ad campaign report per organisation per account per day
     * Ad campaign report per organisation per account per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AdvertisingDataApi~getAdCampaignReportPerOrganisationPerAccountPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAdCampaignReportPerOrganisationPerAccountPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getAdCampaignReportPerOrganisationPerAccountPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/ad-campaign-report-per-organisation-per-account-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAdCampaigns operation.
     * @callback module:api/AdvertisingDataApi~getAdCampaignsCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return ad campaigns by organisation
     * Ad campaigns by organisation
     * @param {String} organisationUuid Organisation uuid
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.format Output format
     * @param {module:api/AdvertisingDataApi~getAdCampaignsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getAdCampaigns(organisationUuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuid' is set
      if (organisationUuid === undefined || organisationUuid === null) {
        throw new Error("Missing the required parameter 'organisationUuid' when calling getAdCampaigns");
      }

      let pathParams = {
        'organisationUuid': organisationUuid
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/ad-campaigns/{organisationUuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay operation.
     * @callback module:api/AdvertisingDataApi~getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return facebook ad extended report per organisation per account per campaign per device per day
     * Facebook ad extended report per organisation per account per campaign per device per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AdvertisingDataApi~getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getFacebookAdExtendedReportPerOrganisationPerAccountPerCampaignPerDevicePerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/facebook-ad-extended-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay operation.
     * @callback module:api/AdvertisingDataApi~getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return google ads report per organisation per account per campaign per device per day
     * Campaign group google ads report per organisation per account per campaign per device per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AdvertisingDataApi~getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getGoogleAdsReportPerOrganisationPerAccountPerCampaignPerDevicePerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/google-ads-report-per-organisation-per-account-per-campaign-per-device-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay operation.
     * @callback module:api/AdvertisingDataApi~getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return linkedin ads extended report per organisation per account per campaign per day
     * Linkedin ads extended report per organisation per account per campaign per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/AdvertisingDataApi~getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getLinkedInAdsExtendedReportPerOrganisationPerAccountPerCampaignPerDay");
      }

      let pathParams = {
        'organisationUuids': organisationUuids
      };
      let queryParams = {
        'from_date': opts['fromDate'],
        'date_format': opts['dateFormat'],
        'format': opts['format']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/csv', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/data/linkedin-ads-extended-report-per-organisation-per-account-per-campaign-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

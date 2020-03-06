/**
 * Cervinodata API documentation
 * <div style='margin: 2em 0;'><p>Before you get going with the Cervinodata API, set up Cervinodata (read the support page here: <a href='https://support.cervinodata.com/hc/en-nl/articles/360004363237' target='_blank'>How to set up the Cervinodata API</a>).</p> <h3>To use the Cervinodata API, you need all of the following:</h3> <p> <ol> <li>An active Cervinodata account, you can start a free trial <a href='https://app.cervinodata.com/register' target='_blank'>here</a></li> <li>At least one connection to a platform (check <a href='https://app.cervinodata.com/data-sources-connections' target='_blank'>here</a>)</li> <li>At least one account switched ON (check <a href='https://app.cervinodata.com/accounts' target='_blank'>here</a>)</li> <li>At least one data refresh executed (check <a href='https://app.cervinodata.com/manual-data-refresh' target='_blank'>here</a>)</li> <li>An active API token (check <a href='https://app.cervinodata.com/settings#/api' target='_blank'>here</a>)</li> </ol> </p> <p> If you wish to automate your Cervinodata API connection, check out the list of client API's at <a href='https://github.com/Cervinodata' target='_blank'>https://github.com/Cervinodata</a>. </p> </div>
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
* CampaignGroup service.
* @module api/CampaignGroupApi
* @version 0.1.0
*/
export default class CampaignGroupApi {

    /**
    * Constructs a new CampaignGroupApi. 
    * @alias module:api/CampaignGroupApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCampaignGroupAdReportPerOrganisationPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupAdReportPerOrganisationPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group ad report per organisation per day
     * Campaign group ad report per organisation per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupAdReportPerOrganisationPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupAdReportPerOrganisationPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupAdReportPerOrganisationPerDay");
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
        '/data/campaign-group-ad-report-per-organisation-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupAnalyticsReportPerOrganisationPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupAnalyticsReportPerOrganisationPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group analytics report per organisation per day
     * Campaign group analytics report per organisation per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupAnalyticsReportPerOrganisationPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupAnalyticsReportPerOrganisationPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupAnalyticsReportPerOrganisationPerDay");
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
        '/data/campaign-group-analytics-report-per-organisation-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCampaignGroupReportPerOrganisationPerDay operation.
     * @callback module:api/CampaignGroupApi~getCampaignGroupReportPerOrganisationPerDayCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return campaign group report per organisation per day
     * Campaign group report per organisation per day
     * @param {Array.<String>} organisationUuids Organisation uuids
     * @param {Object} opts Optional parameters
     * @param {Date} opts.fromDate From date
     * @param {module:model/String} opts.dateFormat Outputted date format
     * @param {module:model/String} opts.format Output format (use csv for large result sets)
     * @param {module:api/CampaignGroupApi~getCampaignGroupReportPerOrganisationPerDayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getCampaignGroupReportPerOrganisationPerDay(organisationUuids, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'organisationUuids' is set
      if (organisationUuids === undefined || organisationUuids === null) {
        throw new Error("Missing the required parameter 'organisationUuids' when calling getCampaignGroupReportPerOrganisationPerDay");
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
        '/data/campaign-group-report-per-organisation-per-day/{organisationUuids}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

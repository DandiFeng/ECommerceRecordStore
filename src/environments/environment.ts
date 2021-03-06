// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // baseUrl: 'http://localhost:8080/products-ut-wo-db/rest'
  // baseUrl: 'http://localhost:8081/products-ut-wo-db/rest/'
  // baseUrl: 'http://ec2-18-189-3-205.us-east-2.compute.amazonaws.com:8080/products-ut-wo-db/rest/'
  // baseUrl: 'http://ec2-3-15-210-133.us-east-2.compute.amazonaws.com/products/rest' // lidia ec2 - now defunkt
  baseUrl: 'http://ec2-3-128-189-36.us-east-2.compute.amazonaws.com:8080/products-ut-wo-db/rest/products'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

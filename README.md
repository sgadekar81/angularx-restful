<!---

# angularx-restful

# Description :
	This is wrapper for angular http rest client
# Why :
	Hey guys hi,
	I am new to this world of programming
	I wrote this code snippet for one the my project
	when new project started I used to copy paste this file in every project
	instead of copying and pasting files npm install angularx-restful --save
	is always better, 
	I tried to, suggetions are welcome

# Installation:
npm install angularx-restful --save
in app.module.ts
	import { AngularxRestful } from 'angularx-restful';
	import { RestService } from 'angularx-restful/srv/rest.service';
add this to imports array
	imports: [
    	AngularxRestful
  	],
add this to providers array
	providers: [
    	RestService
	]


# Usage:
	home.ts
	import { RestService } from 'angularx-restful/srv/rest.service';
	import { RestParams } from 'angularx-restful/classes/rest-params';

	constructor(private _rst:RestService) {}

	let params = new RestParams();
	params.uri = 'https://jsonplaceholder.typicode.com/posts/1';


this._rst
	.get(params)
	.subscribe((profiles)=>{
  			console.log(profiles);
		},(error)=>{
  			console.log(error);
		})

this._rst
	.post(params)
	.subscribe((profiles)=>{
  			console.log(profiles);
		},(error)=>{
			console.log(error);
		})

this._rst
	.put(params)
	.subscribe((profiles)=>{
  			console.log(profiles);
		},(error)=>{
  			console.log(error);
		})

this._rst
	.delete(params)
	.subscribe((profiles)=>{
  			console.log(profiles);
		},(error)=>{
  			console.log(error);
		})

uri.payload = > url 
params.payload  => payload
params.headers => headers
-->

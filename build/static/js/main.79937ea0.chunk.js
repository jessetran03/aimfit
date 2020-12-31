(this["webpackJsonpaimfit-app"]=this["webpackJsonpaimfit-app"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n(20),a=n.n(o),s=n(7),i=n(2),u=n(3),l=n(5),h=n(4),j=n(6),d={API_ENDPOINT:"https://shrouded-cliffs-68019.herokuapp.com/api"},b={saveAuthToken:function(e){window.localStorage.setItem(d.TOKEN_KEY,e)},getAuthToken:function(){return window.localStorage.getItem(d.TOKEN_KEY)},clearAuthToken:function(){window.localStorage.removeItem(d.TOKEN_KEY)},hasAuthToken:function(){return!!b.getAuthToken()},makeBasicAuthToken:function(e,t){return window.btoa("".concat(e,":").concat(t))}},p=b,O=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={error:null},e.handleLoginSuccess=function(){var t=e.props,n=t.location,r=t.history,c=(n.state||{}).from||"/";r.push(c)},e.handleLogin=function(t){t.preventDefault(),e.setState({error:null});var n={user_name:t.target.username.value,password:t.target.password.value};fetch("".concat(d.API_ENDPOINT,"/auth/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){p.saveAuthToken(t.authToken),e.handleLoginSuccess()})).catch((function(t){e.setState({error:t.error})}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.error;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:this.handleLogin,className:"sign-form",children:[Object(r.jsx)("h2",{children:"Sign in"}),Object(r.jsx)("div",{children:e&&Object(r.jsx)("p",{className:"form-error",children:e})}),Object(r.jsx)("label",{htmlFor:"username-input",children:"Username:"}),Object(r.jsx)("input",{type:"text",id:"username-input",name:"username"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"password-input",className:"password-label",children:"Password:"}),Object(r.jsx)("input",{type:"password",id:"password-input",name:"password"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",children:"Log in"}),Object(r.jsx)(s.b,{to:"/register",children:Object(r.jsx)("button",{className:"sign-up-button",children:"Sign Up"})})]})})}}]),n}(c.Component),m=(n(33),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={error:null},e.handleRegisterSuccess=function(){var t=e.props,n=t.location,r=t.history,c=(n.state||{}).from||"/login";r.push(c)},e.handleRegister=function(t){t.preventDefault();var n={full_name:t.target["full-name"].value,user_name:t.target.username.value,password:t.target.password.value};fetch("".concat(d.API_ENDPOINT,"/users"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){return e.handleRegisterSuccess()})).catch((function(t){e.setState({error:t.error})}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.error;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{onSubmit:this.handleRegister,className:"sign-form",children:[Object(r.jsx)("h2",{children:"Sign up"}),Object(r.jsx)("div",{role:"alert",children:e&&Object(r.jsx)("p",{className:"form-error",children:e})}),Object(r.jsx)("label",{htmlFor:"full-name-input",className:"full-name-label",children:"Full Name:"}),Object(r.jsx)("input",{type:"text",id:"full-name-input",name:"full-name"}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"username-input",children:"Username:"}),Object(r.jsx)("input",{type:"text",id:"username-input",name:"username"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"password-input",className:"password-label",children:"Password:"}),Object(r.jsx)("input",{type:"password",id:"password-input",name:"password"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",children:"Create account"})]})})}}]),n}(c.Component)),f=(n(34),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("section",{className:"exercises",children:Object(r.jsx)("h2",{children:"Flat Bench Press"})}),Object(r.jsxs)("section",{class:"exercises",children:[Object(r.jsx)("label",{children:"Weight:"}),Object(r.jsx)("input",{}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{children:"Number of Sets:"}),Object(r.jsx)("input",{}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{children:"Number of Reps:"}),Object(r.jsx)("input",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:"Submit"}),Object(r.jsx)("button",{children:"Reset"})]})]})}}]),n}(c.Component)),x=(n(35),n(36),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleClickDelete=function(t){t.preventDefault();var n=e.props.id;fetch("".concat(d.API_ENDPOINT,"/workouts/").concat(n),{method:"DELETE",headers:{"content-type":"application/json",authorization:"bearer ".concat(p.getAuthToken())}}).then((function(){e.props.getData()})).catch((function(e){console.error({error:e})}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,c=e.day;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("section",{className:"workout",children:[Object(r.jsx)(s.b,{to:"/workouts/".concat(t),children:Object(r.jsx)("h3",{children:n})}),Object(r.jsx)("h4",{children:c}),Object(r.jsx)("button",{type:"button",onClick:this.handleClickDelete,children:"Delete"})]})})}}]),n}(c.Component));x.defaultProps={getData:function(){}};var g=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={workouts:[]},e.getData=function(){return fetch("".concat(d.API_ENDPOINT,"/workouts"),{method:"GET",headers:{Authorization:"Bearer ".concat(p.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.setState({workouts:t})})).catch((function(e){console.error({error:e})}))},e.handleAddWorkout=function(t){t.preventDefault();var n={title:t.target["workout-name"].value,day:t.target["workout-day"].value};fetch("".concat(d.API_ENDPOINT,"/workouts"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(p.getAuthToken())},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(n){e.getData(),t.target["workout-name"].value="",t.target["workout-day"].value="Sunday"})).catch((function(e){console.error({error:e})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.state.workouts;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("section",{className:"workouts",children:[Object(r.jsx)("h2",{children:"Workout List"}),Object(r.jsx)("ul",{children:t.map((function(t){return Object(r.jsx)("li",{children:Object(r.jsx)(x,{id:t.id,title:t.title,day:t.day,getData:e.getData})},t.id)}))}),Object(r.jsxs)("form",{onSubmit:this.handleAddWorkout,className:"add-workout-form",children:[Object(r.jsx)("label",{htmlFor:"workout-name-input",className:"workout-name-label",children:"Workout Name:"}),Object(r.jsx)("input",{className:"workout-name-input",type:"text",id:"workout-name-input",name:"workout-name",required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"workout-day-input",children:"Day of Week:"}),Object(r.jsxs)("select",{id:"workout-day-select",name:"workout-day",children:[Object(r.jsx)("option",{value:"Sunday",children:"Sunday"}),Object(r.jsx)("option",{value:"Monday",children:"Monday"}),Object(r.jsx)("option",{value:"Tuesday",children:"Tuesday"}),Object(r.jsx)("option",{value:"Wednesday",children:"Wednesday"}),Object(r.jsx)("option",{value:"Thursday",children:"Thursday"}),Object(r.jsx)("option",{value:"Friday",children:"Friday"}),Object(r.jsx)("option",{value:"Saturday",children:"Saturday"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",className:"List-add-button",children:"+ Add Workout"})]})]})})}}]),n}(c.Component),k=(n(37),n(38),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleClickDelete=function(t){t.preventDefault();var n=e.props.id;fetch("".concat(d.API_ENDPOINT,"/workout_exercises/").concat(n),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(){e.props.getWorkoutExercises()})).catch((function(e){console.error({error:e})}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n="exercise_log/"+e.id;return Object(r.jsxs)("section",{className:"workout-exercise",children:[Object(r.jsx)(s.b,{to:n,children:Object(r.jsx)("h3",{children:t})}),Object(r.jsx)("button",{type:"button",onClick:this.handleClickDelete,children:"Delete"})]})}}]),n}(c.Component));k.defaultProps={getWorkoutExercises:function(){}};var v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={exercises:[],workout:{}},e.getWorkout=function(){var t=e.props.match.params.workoutId;return fetch("".concat(d.API_ENDPOINT,"/workouts/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(p.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.setState({workout:t})})).catch((function(e){console.error({error:e})}))},e.getWorkoutExercises=function(){var t=e.props.match.params.workoutId;return fetch("".concat(d.API_ENDPOINT,"/workouts/").concat(t,"/exercises"),{method:"GET",headers:{Authorization:"Bearer ".concat(p.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.setState({exercises:t})})).catch((function(e){console.error({error:e})}))},e.handleClickBack=function(){e.props.history.goBack()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getWorkoutExercises(),this.getWorkout()}},{key:"render",value:function(){var e=this,t=this.state.exercises,n=this.state.workout,c=this.props.location.pathname+"/exercises";return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("section",{className:"workouts",children:[Object(r.jsx)("h2",{children:n.title}),Object(r.jsx)("button",{onClick:this.handleClickBack,children:"Back"}),Object(r.jsx)("ul",{children:t.map((function(t){return Object(r.jsx)("li",{children:Object(r.jsx)(k,{id:t.id,exerciseId:t.exercise_id,name:t.exercise_name,getWorkoutExercises:e.getWorkoutExercises})},t.id)}))}),Object(r.jsx)(s.b,{to:c,children:Object(r.jsx)("button",{onClick:this.handleClickAdd,children:"+Add Exercise"})})]})})}}]),n}(c.Component);v.defaultProps={match:{params:{}},location:{pathname:{}}};var y=n(18),w=(n(39),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleAddExercise=function(t){t.preventDefault();var n={workout_id:e.props.workoutId,exercise_id:e.props.id};fetch("".concat(d.API_ENDPOINT,"/workout_exercises"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(p.getAuthToken())},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.props.handleGoBack()})).catch((function(e){console.error({error:e})}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.name;return Object(r.jsxs)("li",{children:[Object(r.jsx)("h3",{children:n}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"button",onClick:this.handleAddExercise,children:"Add to workout"})]},t)}}]),n}(c.Component));w.defaultProps={};var N=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={exercises:[],muscle:"Chest"},e.muscles=["Chest","Back","Triceps","Biceps","Shoulders","Traps","Quads","Hamstrings","Calves"],e.getData=function(){Promise.all([fetch("".concat(d.API_ENDPOINT,"/exercises"))]).then((function(e){var t=Object(y.a)(e,1)[0];return t.ok?Promise.all([t.json()]):t.json().then((function(e){return Promise.reject(e)}))})).then((function(t){var n=Object(y.a)(t,1)[0];e.setState({exercises:n})})).catch((function(e){console.error({error:e})}))},e.filterMuscle=function(t){var n=t.target.value;e.setState({muscle:n})},e.handleGoBack=function(){e.props.history.goBack()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.state.exercises,n=this.props.match.params.workoutId,c=this.state.muscle,o=this.muscles;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:"add-exercise-header",children:"Add Exercise"}),Object(r.jsx)("button",{onClick:this.handleGoBack,children:"Back"}),Object(r.jsxs)("section",{className:"muscle-group",children:[Object(r.jsx)("h3",{className:"muscle-header",children:"Muscle Group"}),Object(r.jsx)("ul",{children:o.map((function(t){return t===e.state.muscle?Object(r.jsx)("li",{children:Object(r.jsx)("button",{className:"selected",onClick:e.filterMuscle,value:t,children:t})},t):Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:e.filterMuscle,value:t,children:t})},t)}))})]}),Object(r.jsxs)("section",{className:"workouts",children:[Object(r.jsxs)("div",{children:["Showing exercises for ",c,":"]}),Object(r.jsx)("ul",{children:t.filter((function(e){return e.muscle===c})).map((function(t){return Object(r.jsx)(w,{id:t.id,name:t.exercise_name,workoutId:n,handleGoBack:e.handleGoBack},t.id)}))})]})]})}}]),n}(c.Component),A=(n(40),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleLogoutClick=function(){p.clearAuthToken()},e.handleLoginSuccess=function(){var t=e.props,n=t.location,r=t.history,c=(n.state||{}).from||"/";r.push(c)},e.handleDemo=function(t){t.preventDefault(),e.setState({error:null});fetch("".concat(d.API_ENDPOINT,"/auth/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({user_name:"dunder_mifflin",password:"Password1!"})}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){p.saveAuthToken(t.authToken),e.handleLoginSuccess()})).catch((function(t){e.setState({error:t.error})}))},e}return Object(u.a)(n,[{key:"renderLoggedIn",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.c,{activeClassName:"is-active",to:"/",children:Object(r.jsx)("span",{children:"Home"})}),Object(r.jsx)(s.c,{activeClassName:"is-active",to:"/workouts",children:Object(r.jsx)("span",{children:"Workouts"})}),Object(r.jsx)(s.b,{onClick:this.handleLogoutClick,to:"/",children:Object(r.jsx)("button",{children:"Logout"})})]})}},{key:"renderLoggedOut",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.c,{activeClassName:"is-active",to:"/login",children:Object(r.jsx)("button",{children:"Log in"})}),Object(r.jsx)(s.c,{activeClassName:"is-active",to:"/register",children:Object(r.jsx)("button",{className:"sign-up-button",children:"Sign Up"})}),Object(r.jsx)("button",{onClick:this.handleDemo,className:"sign-up-button",children:"Demo"})]})}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"nav-header",children:Object(r.jsx)(s.b,{to:"/",children:Object(r.jsx)("h3",{children:"AimFit"})})}),Object(r.jsx)("div",{className:"nav-links",children:p.hasAuthToken()?this.renderLoggedIn():this.renderLoggedOut()})]})}}]),n}(c.Component)),P=(n(41),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderLoggedOut",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(s.b,{to:"/register",children:Object(r.jsx)("h3",{className:"get-started-link",children:"Sign Up"})})})}},{key:"renderLoggedIn",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(s.b,{to:"/workouts",children:Object(r.jsx)("h3",{className:"get-started-link",children:"Get Started!"})})})}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"landing",children:[Object(r.jsx)("h2",{children:"Aim to be Fit."}),Object(r.jsx)("p",{children:"Create workout plans to help achieve your goals."}),p.hasAuthToken()?this.renderLoggedIn():this.renderLoggedOut()]})}}]),n}(c.Component)),T=n(22),E=n.n(T),_=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleClickDelete=function(t){t.preventDefault();var n=e.props.id;fetch("".concat(d.API_ENDPOINT,"/exercise_log/").concat(n),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(){e.props.getExerciseLog()})).catch((function(e){console.error({error:e})}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.set_count,n=e.rep_count,c=e.weight_count,o=e.date_logged;return Object(r.jsxs)("section",{className:"workout-exercise",children:[Object(r.jsx)("h3",{children:E()(o).format("MM-DD-YYYY")}),Object(r.jsxs)("p",{children:[c," lbs for ",t,"x",n]}),Object(r.jsx)("button",{type:"button",onClick:this.handleClickDelete,children:"Delete"})]})}}]),n}(c.Component);_.defaultProps={getLogEntries:function(){}};n(43);var D=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={exerciseLog:[],exercise:{}},e.getExerciseLog=function(){var t=e.props.match.params.exercise_id;return fetch("".concat(d.API_ENDPOINT,"/exercise_log/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(p.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.setState({exerciseLog:t})})).catch((function(e){console.error({error:e})}))},e.getExercise=function(){var t=e.props.match.params.exercise_id;return fetch("".concat(d.API_ENDPOINT,"/exercises/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(p.getAuthToken())}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.setState({exercise:t})})).catch((function(e){console.error({error:e})}))},e.handleAddEntry=function(t){t.preventDefault();var n=e.props.match.params.exercise_id,r={set_count:t.target["entry-set-count"].value,rep_count:t.target["entry-rep-count"].value,weight_count:t.target["entry-weight-count"].value};fetch("".concat(d.API_ENDPOINT,"/exercise_log/").concat(n),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(p.getAuthToken())},body:JSON.stringify(r)}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(n){e.getExerciseLog(),t.target["entry-set-count"].value="",t.target["entry-rep-count"].value="",t.target["entry-weight-count"].value=""})).catch((function(e){console.error({error:e})}))},e.handleClickBack=function(){e.props.history.goBack()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getExercise(),this.getExerciseLog()}},{key:"render",value:function(){var e=this,t=this.state.exerciseLog,n=this.state.exercise;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("section",{className:"workouts",children:[Object(r.jsx)("button",{onClick:this.handleClickBack,children:"Back"}),Object(r.jsx)("h2",{className:"log-header",children:n.exercise_name}),Object(r.jsxs)("form",{onSubmit:this.handleAddEntry,className:"add-entry-form",children:[Object(r.jsx)("label",{htmlFor:"entry-set-count-input",className:"entry-set-count-label",children:"Set x Rep:"}),Object(r.jsx)("input",{className:"entry-set-count-input",type:"number",min:"0",id:"entry-set-count-input",name:"entry-set-count",required:!0}),"\xa0x",Object(r.jsx)("input",{className:"entry-rep-count-input",type:"number",min:"0",id:"entry-rep-count-input",name:"entry-rep-count",required:!0}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"entry-weight-count-input",children:"Weight:"}),Object(r.jsx)("input",{className:"entry-weight-count-input",type:"number",min:"0",id:"entry-weight-count-input",name:"entry-weight-count"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",className:"List-add-button",children:"+ Add Entry"})]}),Object(r.jsx)("ul",{children:t.map((function(t){return Object(r.jsx)("li",{children:Object(r.jsx)(_,{id:t.id,exercise_id:t.exercise_id,weight_count:t.weight_count,set_count:t.set_count,rep_count:t.rep_count,date_logged:t.date_logged,getExerciseLog:e.getExerciseLog})},t.id)}))})]})})}}]),n}(c.Component);D.defaultProps={match:{params:{}},location:{pathname:{}}};n(44);var S=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(u.a)(n,[{key:"renderMainRoutes",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",component:P}),Object(r.jsx)(j.a,{exact:!0,path:"/login",component:O}),Object(r.jsx)(j.a,{path:"/register",component:m}),Object(r.jsx)(j.a,{exact:!0,path:"/workouts",component:g}),["/workouts/:workoutId"].map((function(e){return Object(r.jsx)(j.a,{exact:!0,path:e,component:v},e)})),["/workouts/:workoutId/exercises"].map((function(e){return Object(r.jsx)(j.a,{path:e,component:N},e)})),Object(r.jsx)(j.a,{path:"/exercise",component:f}),["/workouts/exercise_log/:exercise_id"].map((function(e){return Object(r.jsx)(j.a,{path:e,component:D},e)}))]})}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{children:Object(r.jsx)(j.a,{path:"/",component:A})}),Object(r.jsx)("main",{children:this.renderMainRoutes()})]})}}]),n}(c.Component);n(45);a.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(S,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.79937ea0.chunk.js.map
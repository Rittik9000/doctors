(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[613],{6700:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/signup",function(){return t(2450)}])},4120:function(e,r,t){"use strict";t.d(r,{b:function(){return a}});var n=t(7066);let o=new(t(3059)).Z,a=n.Z.create({baseURL:"https://doctor-app-bp0m.onrender.com"});a.interceptors.request.use(function(e){let r=o.get("token");return r&&(e.headers=e.headers||{},e.headers["x-access-token"]=r),e},function(e){return Promise.reject(e)})},2212:function(e,r,t){"use strict";t.d(r,{H:function(){return n}});let n={auth:{signIn:"/login",signUp:"/register"},cms:{contactUs:"/createcontact",listOfDoctors:"/alldoctordepartment",createAppointment:"/createappointment",depertmentWiseDoctor:"/departmentidwisedoctor",featuredDoctors:"/featured",doctorDetails:"/doctordetails",personalCare:"/personalcare",childCare:"/childcare",allDepartments:"/alldepartment",blog:"/allblog",singleBlog:"/singleblog",createBlogComment:"/createblogcomment",getSingleBlogComment:"/getblogcomment",userDash:"/userdash",recentBlog:"/recentblog",searchBlog:"/blogsearch"}}},7859:function(e,r,t){"use strict";t.d(r,{u:function(){return m},c:function(){return g}});var n=t(8029),o=t(3059),a=t(1163),i=t(5678),s=t(4120),l=t(2212);let c=async e=>(console.log(e),(await s.b.post(l.H.auth.signIn,e)).data),u=async e=>(await s.b.post(l.H.auth.signUp,e)).data;var d=t(5007),p=t(6762);let m=()=>{let e=new o.Z,r=(0,a.useRouter)(),t=(0,d.I0)();return(0,n.D)({mutationFn:c,onSuccess:n=>{let{token:o,status:a,message:s,data:l}=n||{};console.log(l),200===a?(e.set("token",o,{path:"/",secure:!0,sameSite:"strict"}),e.set("userId",l._id,{path:"/",secure:!0,sameSite:"strict"}),t((0,p.x4)(l.image)),r.push("/"),i.Am.success("Logged in successfully")):i.Am.error(s||"An error occurred")},onError:e=>{var r;i.Am.error("An error occurred!"),console.error("Login error:",null===(r=e.response)||void 0===r?void 0:r.data)}})},g=()=>{let e=(0,a.useRouter)();return(0,n.D)({mutationFn:u,onSuccess:r=>{let{success:t,message:n}=r||{};t?(i.Am.success(n),e.push("/auth/signin")):i.Am.error(n||"An error occurred!")},onError:e=>{var r;i.Am.error("An error occurred!"),console.error("Sign-up error:",null===(r=e.response)||void 0===r?void 0:r.data)}})}},9912:function(e,r,t){"use strict";t.d(r,{Z:function(){return j}});var n=t(7294),o=t(512),a=t(4953),i=t(4867),s=t(4780),l=t(9243),c=t(1424),u=t(7437),d=t(8561),p=t(9730),m=t(8950),g=t(5893);let h=(0,d.Z)(),f=(0,l.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root});function v(e){return(0,c.Z)({props:e,name:"MuiStack",defaultTheme:h})}let x=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],b=({ownerState:e,theme:r})=>{let t={display:"flex",flexDirection:"column",...(0,p.k9)({theme:r},(0,p.P$)({values:e.direction,breakpoints:r.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let n=(0,m.hB)(r),o=Object.keys(r.breakpoints.values).reduce((r,t)=>(("object"==typeof e.spacing&&null!=e.spacing[t]||"object"==typeof e.direction&&null!=e.direction[t])&&(r[t]=!0),r),{}),i=(0,p.P$)({values:e.direction,base:o}),s=(0,p.P$)({values:e.spacing,base:o});"object"==typeof i&&Object.keys(i).forEach((e,r,t)=>{if(!i[e]){let n=r>0?i[t[r-1]]:"column";i[e]=n}}),t=(0,a.Z)(t,(0,p.k9)({theme:r},s,(r,t)=>e.useFlexGap?{gap:(0,m.NA)(n,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${x(t?i[t]:e.direction)}`]:(0,m.NA)(n,r)}}))}return(0,p.dt)(r.breakpoints,t)};var w=t(9262),y=t(9145),j=function(e={}){let{createStyledComponent:r=f,useThemeProps:t=v,componentName:a="MuiStack"}=e,l=()=>(0,s.Z)({root:["root"]},e=>(0,i.ZP)(a,e),{}),c=r(b);return n.forwardRef(function(e,r){let a=t(e),{component:i="div",direction:s="column",spacing:d=0,divider:p,children:m,className:h,useFlexGap:f=!1,...v}=(0,u.Z)(a),x=l();return(0,g.jsx)(c,{as:i,ownerState:{direction:s,spacing:d,useFlexGap:f},ref:r,className:(0,o.Z)(x.root,h),...v,children:p?function(e,r){let t=n.Children.toArray(e).filter(Boolean);return t.reduce((e,o,a)=>(e.push(o),a<t.length-1&&e.push(n.cloneElement(r,{key:`separator-${a}`})),e),[])}(m,p):m})})}({createStyledComponent:(0,w.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root}),useThemeProps:e=>(0,y.Z)({props:e,name:"MuiStack"})})},2450:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(7294),a=t(6722),i=t(440),s=t(8046),l=t(955),c=t(9912),u=t(8163),d=t(1664),p=t.n(d),m=t(5675),g=t.n(m),h=t(772),f=t.n(h),v=t(7536),x=t(7859);r.default=()=>{var e,r,t;let[d,m]=(0,o.useState)(null),{register:h,handleSubmit:b,formState:{errors:w}}=(0,v.cI)(),{mutate:y,isPending:j}=(0,x.c)(),[Z,k]=(0,o.useState)(null);return o.useEffect(()=>()=>{Z&&URL.revokeObjectURL(Z)},[Z]),(0,n.jsx)(a.Z,{sx:{py:6,px:2,width:"100%",background:"linear-gradient(to right, #ff7e5f, #feb47b)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsxs)(i.Z,{elevation:6,sx:{px:4,py:3,width:{xs:"90vw",lg:"50vw"},textAlign:"center",animation:"".concat(f()["fade-up"]," 0.5s")},children:[(0,n.jsx)(s.Z,{variant:"h5",gutterBottom:!0,children:"Register"}),(0,n.jsxs)("form",{onSubmit:b(e=>{let r=new FormData;r.append("name",e.name),r.append("email",e.email),r.append("phone",e.phone),r.append("password",e.password),r.append("forget",e.forget),d&&r.append("image",d),y(r)}),children:[(0,n.jsx)(l.Z,{...h("name",{required:"First name is required"}),label:"Name",type:"text",fullWidth:!0,margin:"normal",variant:"outlined",error:!!w.name,helperText:null===(e=w.name)||void 0===e?void 0:e.message}),(0,n.jsx)(l.Z,{...h("email",{required:"Email is required",pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,message:"Invalid email format"}}),label:"Your Email",fullWidth:!0,margin:"normal",variant:"outlined",error:!!w.email,helperText:w.email&&w.email.message}),(0,n.jsx)(l.Z,{...h("phone",{required:"phone no is required"}),label:"Phone no",type:"number",fullWidth:!0,margin:"normal",variant:"outlined",error:!!w.phone,helperText:null===(r=w.phone)||void 0===r?void 0:r.message}),(0,n.jsx)(l.Z,{...h("password",{required:"Password is required"}),label:"Password",type:"password",fullWidth:!0,margin:"normal",variant:"outlined",error:!!w.password,helperText:w.password&&w.password.message}),(0,n.jsx)(l.Z,{...h("forget",{required:"forget password is required"}),label:"Forget password",placeholder:"eg. last school name",type:"text",fullWidth:!0,margin:"normal",variant:"outlined",error:!!w.forget,helperText:null===(t=w.forget)||void 0===t?void 0:t.message}),(0,n.jsxs)(c.Z,{spacing:2,direction:"row",children:[(0,n.jsx)("input",{accept:"image/*",id:"upload-button",type:"file",style:{display:"none"},onChange:e=>{var r,t;let n=null!==(t=null===(r=e.target.files)||void 0===r?void 0:r[0])&&void 0!==t?t:null;n?(m(n),k(URL.createObjectURL(n))):(m(null),k(null))}}),(0,n.jsx)("label",{htmlFor:"upload-button",children:(0,n.jsx)(u.Z,{variant:"contained",component:"span",color:"primary",children:"Upload"})}),Z?(0,n.jsx)(g(),{src:Z,alt:"Uploaded preview",width:200,height:180,style:{objectFit:"cover"}}):(0,n.jsx)(s.Z,{variant:"body2",color:"textSecondary",children:"Drag or drop content"})]}),(0,n.jsx)(u.Z,{variant:"contained",color:"secondary",fullWidth:!0,size:"large",type:"submit",sx:{marginTop:2},children:j?"Loading...":"Sign up"})]}),(0,n.jsx)("div",{className:f()["hr-container"],children:(0,n.jsx)("span",{children:"OR"})}),(0,n.jsxs)(c.Z,{spacing:2,direction:"row",alignItems:"center",justifyContent:"center",children:[(0,n.jsx)(s.Z,{variant:"body1",sx:{color:"gray"},children:"Already Have an Account?"}),(0,n.jsx)(p(),{href:"/auth/signin",children:(0,n.jsx)(u.Z,{variant:"contained",color:"primary",children:"Log in"})})]})]})})}},772:function(e){e.exports={"hr-container":"auth_hr-container__HKij_",fadeUp:"auth_fadeUp__oPvaU","fade-up":"auth_fade-up__vfbei"}}},function(e){e.O(0,[168,955,675,536,888,774,179],function(){return e(e.s=6700)}),_N_E=e.O()}]);
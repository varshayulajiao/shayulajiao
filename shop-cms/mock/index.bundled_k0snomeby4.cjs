var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// mock/index.js
var mock_exports = {};
__export(mock_exports, {
  default: () => mock_default
});
module.exports = __toCommonJS(mock_exports);
var mock_default = [
  {
    url: "/api/login",
    method: "post",
    response(req) {
      if (req.body.username === "admin" && req.body.password === "admin") {
        return { errcode: 0, token: "djfkjaskfjaks", username: req.body.username };
      } else {
        return { errcode: -1 };
      }
    }
  },
  {
    url: "/api/sysUser",
    method: "get",
    response() {
      return [
        {
          username: "admin",
          userlevel: 123,
          time: "\u6CE8\u518C\u65F6\u95F4:2023-07-06 10:28:26",
          onoff: false,
          drawer: false,
          password: "admin",
          telephone: 15012341234,
          email: "15012341234@qq.com",
          id: 1
        },
        {
          username: "jack",
          userlevel: 456,
          time: "\u6CE8\u518C\u65F6\u95F4:2023-07-06 10:28:26",
          onoff: false,
          drawer: false,
          password: "jack",
          telephone: 15012341234,
          email: "15012341234@qq.com",
          id: 2
        },
        {
          username: "aa",
          userlevel: 456,
          time: "\u6CE8\u518C\u65F6\u95F4:2023-07-06 10:28:26",
          onoff: false,
          drawer: false,
          password: "aa",
          telephone: 15012341234,
          email: "15012341234@qq.com",
          id: 3
        },
        {
          username: "bb",
          userlevel: 456,
          time: "\u6CE8\u518C\u65F6\u95F4:2023-07-06 10:28:26",
          onoff: false,
          drawer: false,
          password: "bb",
          telephone: 15012341234,
          email: "15012341234@qq.com",
          id: 4
        },
        {
          username: "cc",
          userlevel: 456,
          time: "\u6CE8\u518C\u65F6\u95F4:2023-07-06 10:28:26",
          onoff: false,
          drawer: false,
          password: "cc",
          telephone: 15012341234,
          email: "15012341234@qq.com",
          id: 5
        }
      ];
    }
  }
];
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJDOlxcXFxVc2Vyc1xcXFxsZW5vdm9cXFxcRGVza3RvcFxcXFxcdTY1QjBcdTVFRkFcdTY1ODdcdTRFRjZcdTU5MzlcXFxcc2hvcFxcXFxzaGF5dWxhamlhb1xcXFxzaG9wLWNtc1xcXFxtb2NrXFxcXGluZGV4LmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkM6XFxcXFVzZXJzXFxcXGxlbm92b1xcXFxEZXNrdG9wXFxcXFx1NjVCMFx1NUVGQVx1NjU4N1x1NEVGNlx1NTkzOVxcXFxzaG9wXFxcXHNoYXl1bGFqaWFvXFxcXHNob3AtY21zXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0M6L1VzZXJzL2xlbm92by9EZXNrdG9wLyVFNiU5NiVCMCVFNSVCQiVCQSVFNiU5NiU4NyVFNCVCQiVCNiVFNSVBNCVCOS9zaG9wL3NoYXl1bGFqaWFvL3Nob3AtY21zL21vY2svaW5kZXguanNcIjtleHBvcnQgZGVmYXVsdFtcclxuICAgIHtcclxuICAgICAgICB1cmw6ICcvYXBpL2xvZ2luJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICByZXNwb25zZShyZXEpIHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2cocmVxLmJvZHkpICAvLyBHRVRcdThCRjdcdTZDNDJcdTUzRDFcdTkwMDFcdThGQzdcdTY3NjVcdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICAgIGlmKHJlcS5ib2R5LnVzZXJuYW1lID09PSAnYWRtaW4nICYmIHJlcS5ib2R5LnBhc3N3b3JkID09PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGVycmNvZGU6IDAsIHRva2VuOiAnZGpma2phc2tmamFrcycgLHVzZXJuYW1lOnJlcS5ib2R5LnVzZXJuYW1lfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGVycmNvZGU6IC0xIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvYXBpL3N5c1VzZXInLFxyXG4gICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICByZXNwb25zZSgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcS5ib2R5KSAgLy8gR0VUXHU4QkY3XHU2QzQyXHU1M0QxXHU5MDAxXHU4RkM3XHU2NzY1XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6ICdhZG1pbicsXHJcbiAgICAgICAgICAgIHVzZXJsZXZlbDogMTIzLFxyXG4gICAgICAgICAgICB0aW1lOiAnXHU2Q0U4XHU1MThDXHU2NUY2XHU5NUY0OjIwMjMtMDctMDYgMTA6Mjg6MjYnLFxyXG4gICAgICAgICAgICBvbm9mZjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYXdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnYWRtaW4nLFxyXG4gICAgICAgICAgICB0ZWxlcGhvbmU6IDE1MDEyMzQxMjM0LFxyXG4gICAgICAgICAgICBlbWFpbDogJzE1MDEyMzQxMjM0QHFxLmNvbScsXHJcbiAgICAgICAgICAgIGlkOjFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnamFjaycsXHJcbiAgICAgICAgICAgIHVzZXJsZXZlbDogNDU2LFxyXG4gICAgICAgICAgICB0aW1lOiAnXHU2Q0U4XHU1MThDXHU2NUY2XHU5NUY0OjIwMjMtMDctMDYgMTA6Mjg6MjYnLFxyXG4gICAgICAgICAgICBvbm9mZjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYXdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnamFjaycsXHJcbiAgICAgICAgICAgIHRlbGVwaG9uZTogMTUwMTIzNDEyMzQsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnMTUwMTIzNDEyMzRAcXEuY29tJyxcclxuICAgICAgICAgICAgaWQ6MlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6ICdhYScsXHJcbiAgICAgICAgICAgIHVzZXJsZXZlbDogNDU2LFxyXG4gICAgICAgICAgICB0aW1lOiAnXHU2Q0U4XHU1MThDXHU2NUY2XHU5NUY0OjIwMjMtMDctMDYgMTA6Mjg6MjYnLFxyXG4gICAgICAgICAgICBvbm9mZjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYXdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnYWEnLFxyXG4gICAgICAgICAgICB0ZWxlcGhvbmU6IDE1MDEyMzQxMjM0LFxyXG4gICAgICAgICAgICBlbWFpbDogJzE1MDEyMzQxMjM0QHFxLmNvbScsXHJcbiAgICAgICAgICAgIGlkOjNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnYmInLFxyXG4gICAgICAgICAgICB1c2VybGV2ZWw6IDQ1NixcclxuICAgICAgICAgICAgdGltZTogJ1x1NkNFOFx1NTE4Q1x1NjVGNlx1OTVGNDoyMDIzLTA3LTA2IDEwOjI4OjI2JyxcclxuICAgICAgICAgICAgb25vZmY6IGZhbHNlLFxyXG4gICAgICAgICAgICBkcmF3ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJ2JiJyxcclxuICAgICAgICAgICAgdGVsZXBob25lOiAxNTAxMjM0MTIzNCxcclxuICAgICAgICAgICAgZW1haWw6ICcxNTAxMjM0MTIzNEBxcS5jb20nLFxyXG4gICAgICAgICAgICBpZDo0XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogJ2NjJyxcclxuICAgICAgICAgICAgdXNlcmxldmVsOiA0NTYsXHJcbiAgICAgICAgICAgIHRpbWU6ICdcdTZDRThcdTUxOENcdTY1RjZcdTk1RjQ6MjAyMy0wNy0wNiAxMDoyODoyNicsXHJcbiAgICAgICAgICAgIG9ub2ZmOiBmYWxzZSxcclxuICAgICAgICAgICAgZHJhd2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdjYycsXHJcbiAgICAgICAgICAgIHRlbGVwaG9uZTogMTUwMTIzNDEyMzQsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnMTUwMTIzNDEyMzRAcXEuY29tJyxcclxuICAgICAgICAgICAgaWQ6NVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSBcclxuICAgIH1cclxuXSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdYLElBQU8sZUFBTztBQUFBLEVBQzFYO0FBQUEsSUFDSSxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixTQUFTLEtBQUs7QUFFWixVQUFHLElBQUksS0FBSyxhQUFhLFdBQVcsSUFBSSxLQUFLLGFBQWEsU0FBUztBQUNqRSxlQUFPLEVBQUUsU0FBUyxHQUFHLE9BQU8saUJBQWlCLFVBQVMsSUFBSSxLQUFLLFNBQVE7QUFBQSxNQUN6RSxPQUNLO0FBQ0gsZUFBTyxFQUFFLFNBQVMsR0FBRztBQUFBLE1BQ3ZCO0FBQUEsSUFDRjtBQUFBLEVBQ0o7QUFBQSxFQUNBO0FBQUEsSUFDRSxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBRVQsYUFBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxVQUNQLElBQUc7QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLFVBQ0UsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFVBQ1AsSUFBRztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsVUFDRSxVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUEsVUFDWCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxJQUFHO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxVQUNFLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxVQUNYLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxVQUNQLElBQUc7QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLFVBQ0UsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFVBQ1gsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFVBQ1AsSUFBRztBQUFBLFFBQ0w7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K

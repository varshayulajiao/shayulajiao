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
          userLevelId: 123,
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
          userLevelId: 456,
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
          userLevelId: 456,
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
          userLevelId: 456,
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
          userLevelId: 456,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9pbmRleC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJFOlxcXFxcdTUzNDNcdTk1MEJcdTY1NTlcdTgwQjJcXFxcc2hvcFxcXFxzaGF5dWxhamlhb1xcXFxzaG9wLWNtc1xcXFxtb2NrXFxcXGluZGV4LmpzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkU6XFxcXFx1NTM0M1x1OTUwQlx1NjU1OVx1ODBCMlxcXFxzaG9wXFxcXHNoYXl1bGFqaWFvXFxcXHNob3AtY21zXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0U6LyVFNSU4RCU4MyVFOSU5NCU4QiVFNiU5NSU5OSVFOCU4MiVCMi9zaG9wL3NoYXl1bGFqaWFvL3Nob3AtY21zL21vY2svaW5kZXguanNcIjtleHBvcnQgZGVmYXVsdFtcclxuICAgIHtcclxuICAgICAgICB1cmw6ICcvYXBpL2xvZ2luJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICByZXNwb25zZShyZXEpIHtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2cocmVxLmJvZHkpICAvLyBHRVRcdThCRjdcdTZDNDJcdTUzRDFcdTkwMDFcdThGQzdcdTY3NjVcdTc2ODRcdTY1NzBcdTYzNkVcclxuICAgICAgICAgIGlmKHJlcS5ib2R5LnVzZXJuYW1lID09PSAnYWRtaW4nICYmIHJlcS5ib2R5LnBhc3N3b3JkID09PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGVycmNvZGU6IDAsIHRva2VuOiAnZGpma2phc2tmamFrcycgLHVzZXJuYW1lOnJlcS5ib2R5LnVzZXJuYW1lfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGVycmNvZGU6IC0xIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvYXBpL3N5c1VzZXInLFxyXG4gICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICByZXNwb25zZSgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJlcS5ib2R5KSAgLy8gR0VUXHU4QkY3XHU2QzQyXHU1M0QxXHU5MDAxXHU4RkM3XHU2NzY1XHU3Njg0XHU2NTcwXHU2MzZFXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6ICdhZG1pbicsXHJcbiAgICAgICAgICAgIHVzZXJMZXZlbElkOiAxMjMsXHJcbiAgICAgICAgICAgIHRpbWU6ICdcdTZDRThcdTUxOENcdTY1RjZcdTk1RjQ6MjAyMy0wNy0wNiAxMDoyODoyNicsXHJcbiAgICAgICAgICAgIG9ub2ZmOiBmYWxzZSxcclxuICAgICAgICAgICAgZHJhd2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdhZG1pbicsXHJcbiAgICAgICAgICAgIHRlbGVwaG9uZTogMTUwMTIzNDEyMzQsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnMTUwMTIzNDEyMzRAcXEuY29tJyxcclxuICAgICAgICAgICAgaWQ6MVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6ICdqYWNrJyxcclxuICAgICAgICAgICAgdXNlckxldmVsSWQ6IDQ1NixcclxuICAgICAgICAgICAgdGltZTogJ1x1NkNFOFx1NTE4Q1x1NjVGNlx1OTVGNDoyMDIzLTA3LTA2IDEwOjI4OjI2JyxcclxuICAgICAgICAgICAgb25vZmY6IGZhbHNlLFxyXG4gICAgICAgICAgICBkcmF3ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJ2phY2snLFxyXG4gICAgICAgICAgICB0ZWxlcGhvbmU6IDE1MDEyMzQxMjM0LFxyXG4gICAgICAgICAgICBlbWFpbDogJzE1MDEyMzQxMjM0QHFxLmNvbScsXHJcbiAgICAgICAgICAgIGlkOjJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnYWEnLFxyXG4gICAgICAgICAgICB1c2VyTGV2ZWxJZDogNDU2LFxyXG4gICAgICAgICAgICB0aW1lOiAnXHU2Q0U4XHU1MThDXHU2NUY2XHU5NUY0OjIwMjMtMDctMDYgMTA6Mjg6MjYnLFxyXG4gICAgICAgICAgICBvbm9mZjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYXdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnYWEnLFxyXG4gICAgICAgICAgICB0ZWxlcGhvbmU6IDE1MDEyMzQxMjM0LFxyXG4gICAgICAgICAgICBlbWFpbDogJzE1MDEyMzQxMjM0QHFxLmNvbScsXHJcbiAgICAgICAgICAgIGlkOjNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnYmInLFxyXG4gICAgICAgICAgICB1c2VyTGV2ZWxJZDogNDU2LFxyXG4gICAgICAgICAgICB0aW1lOiAnXHU2Q0U4XHU1MThDXHU2NUY2XHU5NUY0OjIwMjMtMDctMDYgMTA6Mjg6MjYnLFxyXG4gICAgICAgICAgICBvbm9mZjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYXdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnYmInLFxyXG4gICAgICAgICAgICB0ZWxlcGhvbmU6IDE1MDEyMzQxMjM0LFxyXG4gICAgICAgICAgICBlbWFpbDogJzE1MDEyMzQxMjM0QHFxLmNvbScsXHJcbiAgICAgICAgICAgIGlkOjRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnY2MnLFxyXG4gICAgICAgICAgICB1c2VyTGV2ZWxJZDogNDU2LFxyXG4gICAgICAgICAgICB0aW1lOiAnXHU2Q0U4XHU1MThDXHU2NUY2XHU5NUY0OjIwMjMtMDctMDYgMTA6Mjg6MjYnLFxyXG4gICAgICAgICAgICBvbm9mZjogZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYXdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnY2MnLFxyXG4gICAgICAgICAgICB0ZWxlcGhvbmU6IDE1MDEyMzQxMjM0LFxyXG4gICAgICAgICAgICBlbWFpbDogJzE1MDEyMzQxMjM0QHFxLmNvbScsXHJcbiAgICAgICAgICAgIGlkOjVcclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0gXHJcbiAgICB9XHJcbl0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnUyxJQUFPLGVBQU87QUFBQSxFQUMxUztBQUFBLElBQ0ksS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsU0FBUyxLQUFLO0FBRVosVUFBRyxJQUFJLEtBQUssYUFBYSxXQUFXLElBQUksS0FBSyxhQUFhLFNBQVM7QUFDakUsZUFBTyxFQUFFLFNBQVMsR0FBRyxPQUFPLGlCQUFpQixVQUFTLElBQUksS0FBSyxTQUFRO0FBQUEsTUFDekUsT0FDSztBQUNILGVBQU8sRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUN2QjtBQUFBLElBQ0Y7QUFBQSxFQUNKO0FBQUEsRUFDQTtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUVULGFBQU87QUFBQSxRQUNMO0FBQUEsVUFDRSxVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxJQUFHO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxVQUNFLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxVQUNQLElBQUc7QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLFVBQ0UsVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsVUFBVTtBQUFBLFVBQ1YsV0FBVztBQUFBLFVBQ1gsT0FBTztBQUFBLFVBQ1AsSUFBRztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsVUFDRSxVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsVUFDVixXQUFXO0FBQUEsVUFDWCxPQUFPO0FBQUEsVUFDUCxJQUFHO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxVQUNFLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLFdBQVc7QUFBQSxVQUNYLE9BQU87QUFBQSxVQUNQLElBQUc7QUFBQSxRQUNMO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0o7IiwKICAibmFtZXMiOiBbXQp9Cg==

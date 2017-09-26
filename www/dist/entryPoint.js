define(["require", "exports", "./bootstrapper"], function (require, exports, bootstrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var bbPromise = Promise;
    if (bbPromise.config) {
        bbPromise.config({
            warnings: window.unite.configName === "dev" ?
                { wForgottenReturn: false } : false
        });
    }
    bootstrapper_1.bootstrap();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2VudHJ5UG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBTUEsSUFBTSxTQUFTLEdBQUcsT0FBYyxDQUFDO0lBQ2pDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25CLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDYixRQUFRLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssS0FBSztnQkFDdkMsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLO1NBQzFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3QkFBUyxFQUFFLENBQUMiLCJmaWxlIjoiZW50cnlQb2ludC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFpbiBlbnRyeSBwb2ludCBmb3IgYXBwLlxuICovXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInVuaXRlanMtdHlwZXNcIiAvPlxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSBcIi4vYm9vdHN0cmFwcGVyXCI7XG5cbmNvbnN0IGJiUHJvbWlzZSA9IFByb21pc2UgYXMgYW55O1xuaWYgKGJiUHJvbWlzZS5jb25maWcpIHtcbiAgICBiYlByb21pc2UuY29uZmlnKHtcbiAgICAgICAgd2FybmluZ3M6IHdpbmRvdy51bml0ZS5jb25maWdOYW1lID09PSBcImRldlwiID9cbiAgICAgICAgICAgIHsgd0ZvcmdvdHRlblJldHVybjogZmFsc2UgfSA6IGZhbHNlXG4gICAgfSk7XG59XG5cbmJvb3RzdHJhcCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==

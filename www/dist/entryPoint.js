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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2VudHJ5UG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBTUEsSUFBTSxTQUFTLEdBQUcsT0FBYyxDQUFDO0lBQ2pDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25CLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDYixRQUFRLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUM7Z0JBQ3pDLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUs7U0FDMUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFTLEVBQUUsQ0FBQyIsImZpbGUiOiJlbnRyeVBvaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYWluIGVudHJ5IHBvaW50IGZvciBhcHAuXG4gKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidW5pdGVqcy10eXBlc1wiIC8+XG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tIFwiLi9ib290c3RyYXBwZXJcIjtcblxuY29uc3QgYmJQcm9taXNlID0gUHJvbWlzZSBhcyBhbnk7XG5pZiAoYmJQcm9taXNlLmNvbmZpZykge1xuICAgIGJiUHJvbWlzZS5jb25maWcoe1xuICAgICAgICB3YXJuaW5nczogd2luZG93LnVuaXRlLmNvbmZpZ05hbWUgPT09IFwiZGV2XCIgP1xuICAgICAgICAgICAgeyB3Rm9yZ290dGVuUmV0dXJuOiBmYWxzZSB9IDogZmFsc2VcbiAgICB9KTtcbn1cblxuYm9vdHN0cmFwKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9

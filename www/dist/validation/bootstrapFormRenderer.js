define(["require", "exports", "../domHelpers/style"], function (require, exports, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BootstrapFormRenderer = /** @class */ (function () {
        function BootstrapFormRenderer() {
        }
        BootstrapFormRenderer.prototype.render = function (instruction) {
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var _b = _a[_i], result = _b.result, elements = _b.elements;
                for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                    var element = elements_1[_c];
                    this.remove(element, result);
                }
            }
            for (var _d = 0, _e = instruction.render; _d < _e.length; _d++) {
                var _f = _e[_d], result = _f.result, elements = _f.elements;
                for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                    var element = elements_2[_g];
                    this.add(element, result);
                }
            }
        };
        BootstrapFormRenderer.prototype.add = function (element, result) {
            var formGroup = element.closest(".form-group");
            if (!formGroup) {
                return;
            }
            if (result.valid) {
                if (!style_1.Style.has(element, "is-invalid")) {
                    style_1.Style.toggle(element, "is-valid", true);
                }
            }
            else {
                style_1.Style.toggle(element, "is-valid", false);
                style_1.Style.toggle(element, "is-invalid", true);
                var message = document.createElement("span");
                message.className = "invalid-feedback";
                message.textContent = result.message;
                message.id = "validation-message-" + result.id;
                formGroup.appendChild(message);
            }
        };
        BootstrapFormRenderer.prototype.remove = function (element, result) {
            style_1.Style.toggle(element, "is-invalid", false);
            style_1.Style.toggle(element, "is-valid", false);
            var formGroup = element.closest(".form-group");
            if (!formGroup) {
                return;
            }
            var message = formGroup.querySelector("#validation-message-" + result.id);
            if (message) {
                formGroup.removeChild(message);
            }
        };
        return BootstrapFormRenderer;
    }());
    exports.BootstrapFormRenderer = BootstrapFormRenderer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL3ZhbGlkYXRpb24vYm9vdHN0cmFwRm9ybVJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BO1FBQUE7UUFrREEsQ0FBQztRQWpEVSxzQ0FBTSxHQUFiLFVBQWMsV0FBOEI7WUFDeEMsR0FBRyxDQUFDLENBQStCLFVBQW9CLEVBQXBCLEtBQUEsV0FBVyxDQUFDLFFBQVEsRUFBcEIsY0FBb0IsRUFBcEIsSUFBb0I7Z0JBQTVDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTtnQkFDekIsR0FBRyxDQUFDLENBQWtCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUTtvQkFBekIsSUFBTSxPQUFPLGlCQUFBO29CQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNoQzthQUNKO1lBRUQsR0FBRyxDQUFDLENBQStCLFVBQWtCLEVBQWxCLEtBQUEsV0FBVyxDQUFDLE1BQU0sRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0I7Z0JBQTFDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTtnQkFDekIsR0FBRyxDQUFDLENBQWtCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUTtvQkFBekIsSUFBTSxPQUFPLGlCQUFBO29CQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUM3QjthQUNKO1FBQ0wsQ0FBQztRQUVNLG1DQUFHLEdBQVYsVUFBVyxPQUFnQixFQUFFLE1BQXNCO1lBQy9DLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDZixFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLGFBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDekMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO2dCQUN2QyxPQUFPLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsd0JBQXNCLE1BQU0sQ0FBQyxFQUFJLENBQUM7Z0JBQy9DLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsQ0FBQztRQUNMLENBQUM7UUFFTSxzQ0FBTSxHQUFiLFVBQWMsT0FBZ0IsRUFBRSxNQUFzQjtZQUNsRCxhQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0MsYUFBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXpDLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDakQsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLHlCQUF1QixNQUFNLENBQUMsRUFBSSxDQUFDLENBQUM7WUFDNUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDVixTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLENBQUM7UUFDTCxDQUFDO1FBQ0wsNEJBQUM7SUFBRCxDQWxEQSxBQWtEQyxJQUFBO0lBbERZLHNEQUFxQiIsImZpbGUiOiJ2YWxpZGF0aW9uL2Jvb3RzdHJhcEZvcm1SZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQm9vdHN0cmFwIDQgZm9ybSByZW5kZXJlciBmb3IgQXVyZWxpYSBmb3JtIHZhbGlkYXRpb24uXG4gKi9cbmltcG9ydCB7IFJlbmRlckluc3RydWN0aW9uLCBWYWxpZGF0ZVJlc3VsdCB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSBcIi4uL2RvbUhlbHBlcnMvc3R5bGVcIjtcblxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcEZvcm1SZW5kZXJlciB7XG4gICAgcHVibGljIHJlbmRlcihpbnN0cnVjdGlvbjogUmVuZGVySW5zdHJ1Y3Rpb24pOiB2b2lkIHtcbiAgICAgICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi51bnJlbmRlcikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24ucmVuZGVyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChlbGVtZW50LCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkZChlbGVtZW50OiBFbGVtZW50LCByZXN1bHQ6IFZhbGlkYXRlUmVzdWx0KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZvcm1Hcm91cCA9IGVsZW1lbnQuY2xvc2VzdChcIi5mb3JtLWdyb3VwXCIpO1xuICAgICAgICBpZiAoIWZvcm1Hcm91cCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC52YWxpZCkge1xuICAgICAgICAgICAgaWYgKCFTdHlsZS5oYXMoZWxlbWVudCwgXCJpcy1pbnZhbGlkXCIpKSB7XG4gICAgICAgICAgICAgICAgU3R5bGUudG9nZ2xlKGVsZW1lbnQsIFwiaXMtdmFsaWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTdHlsZS50b2dnbGUoZWxlbWVudCwgXCJpcy12YWxpZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICBTdHlsZS50b2dnbGUoZWxlbWVudCwgXCJpcy1pbnZhbGlkXCIsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgbWVzc2FnZS5jbGFzc05hbWUgPSBcImludmFsaWQtZmVlZGJhY2tcIjtcbiAgICAgICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSByZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgIG1lc3NhZ2UuaWQgPSBgdmFsaWRhdGlvbi1tZXNzYWdlLSR7cmVzdWx0LmlkfWA7XG4gICAgICAgICAgICBmb3JtR3JvdXAuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKGVsZW1lbnQ6IEVsZW1lbnQsIHJlc3VsdDogVmFsaWRhdGVSZXN1bHQpOiB2b2lkIHtcbiAgICAgICAgU3R5bGUudG9nZ2xlKGVsZW1lbnQsIFwiaXMtaW52YWxpZFwiLCBmYWxzZSk7XG4gICAgICAgIFN0eWxlLnRvZ2dsZShlbGVtZW50LCBcImlzLXZhbGlkXCIsIGZhbHNlKTtcblxuICAgICAgICBjb25zdCBmb3JtR3JvdXAgPSBlbGVtZW50LmNsb3Nlc3QoXCIuZm9ybS1ncm91cFwiKTtcbiAgICAgICAgaWYgKCFmb3JtR3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtR3JvdXAucXVlcnlTZWxlY3RvcihgI3ZhbGlkYXRpb24tbWVzc2FnZS0ke3Jlc3VsdC5pZH1gKTtcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGZvcm1Hcm91cC5yZW1vdmVDaGlsZChtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=

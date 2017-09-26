define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Clipboard class.
     */
    var Clipboard = /** @class */ (function () {
        function Clipboard() {
        }
        Clipboard.copyTo = function (text) {
            var textArea = document.createElement("textarea");
            // Place in top-left corner of screen regardless of scroll position.
            textArea.style.position = "fixed";
            textArea.style.top = "0";
            textArea.style.left = "0";
            // Ensure it has a small width and height. Setting to 1px / 1em
            // doesn't work as this gives a negative w/h on some browsers.
            textArea.style.width = "2em";
            textArea.style.height = "2em";
            // We don't need padding, reducing the size if it does flash render.
            textArea.style.padding = "0";
            // Clean up any borders.
            textArea.style.border = "none";
            textArea.style.outline = "none";
            textArea.style.boxShadow = "none";
            // Avoid flash of white box if rendered for any reason.
            textArea.style.background = "transparent";
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand("copy");
            }
            catch (err) {
                /* didn't copy must be an old browser */
            }
            document.body.removeChild(textArea);
        };
        return Clipboard;
    }());
    exports.Clipboard = Clipboard;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL2RvbUhlbHBlcnMvY2xpcGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBOztPQUVHO0lBQ0g7UUFBQTtRQXVDQSxDQUFDO1FBdENpQixnQkFBTSxHQUFwQixVQUFxQixJQUFZO1lBQzdCLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFcEQsb0VBQW9FO1lBQ3BFLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztZQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDekIsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBRTFCLCtEQUErRDtZQUMvRCw4REFBOEQ7WUFDOUQsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUU5QixvRUFBb0U7WUFDcEUsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBRTdCLHdCQUF3QjtZQUN4QixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDL0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUVsQyx1REFBdUQ7WUFDdkQsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO1lBRTFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBRXRCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXBDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVsQixJQUFJLENBQUM7Z0JBQ0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDWCx3Q0FBd0M7WUFDNUMsQ0FBQztZQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDTCxnQkFBQztJQUFELENBdkNBLEFBdUNDLElBQUE7SUF2Q1ksOEJBQVMiLCJmaWxlIjoiZG9tSGVscGVycy9jbGlwYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENsaXBib2FyZCBjbGFzcy5cbiAqL1xuZXhwb3J0IGNsYXNzIENsaXBib2FyZCB7XG4gICAgcHVibGljIHN0YXRpYyBjb3B5VG8odGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gICAgICAgIC8vIFBsYWNlIGluIHRvcC1sZWZ0IGNvcm5lciBvZiBzY3JlZW4gcmVnYXJkbGVzcyBvZiBzY3JvbGwgcG9zaXRpb24uXG4gICAgICAgIHRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICB0ZXh0QXJlYS5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgdGV4dEFyZWEuc3R5bGUubGVmdCA9IFwiMFwiO1xuXG4gICAgICAgIC8vIEVuc3VyZSBpdCBoYXMgYSBzbWFsbCB3aWR0aCBhbmQgaGVpZ2h0LiBTZXR0aW5nIHRvIDFweCAvIDFlbVxuICAgICAgICAvLyBkb2Vzbid0IHdvcmsgYXMgdGhpcyBnaXZlcyBhIG5lZ2F0aXZlIHcvaCBvbiBzb21lIGJyb3dzZXJzLlxuICAgICAgICB0ZXh0QXJlYS5zdHlsZS53aWR0aCA9IFwiMmVtXCI7XG4gICAgICAgIHRleHRBcmVhLnN0eWxlLmhlaWdodCA9IFwiMmVtXCI7XG5cbiAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCBwYWRkaW5nLCByZWR1Y2luZyB0aGUgc2l6ZSBpZiBpdCBkb2VzIGZsYXNoIHJlbmRlci5cbiAgICAgICAgdGV4dEFyZWEuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuXG4gICAgICAgIC8vIENsZWFuIHVwIGFueSBib3JkZXJzLlxuICAgICAgICB0ZXh0QXJlYS5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgdGV4dEFyZWEuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgICAgICB0ZXh0QXJlYS5zdHlsZS5ib3hTaGFkb3cgPSBcIm5vbmVcIjtcblxuICAgICAgICAvLyBBdm9pZCBmbGFzaCBvZiB3aGl0ZSBib3ggaWYgcmVuZGVyZWQgZm9yIGFueSByZWFzb24uXG4gICAgICAgIHRleHRBcmVhLnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XG5cbiAgICAgICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuXG4gICAgICAgIHRleHRBcmVhLnNlbGVjdCgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgLyogZGlkbid0IGNvcHkgbXVzdCBiZSBhbiBvbGQgYnJvd3NlciAqL1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0QXJlYSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==

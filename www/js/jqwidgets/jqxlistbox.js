/*
 jQWidgets v3.5.0 (2014-Sep-15)
 Copyright (c) 2011-2014 jQWidgets.
 License: http://jqwidgets.com/license/
 */

(function (a) {
    a.jqx.jqxWidget("jqxListBox", "", {});
    a.extend(a.jqx._jqxListBox.prototype, {defineInstance: function () {
            var b = {disabled: false, width: null, height: null, items: new Array(), multiple: false, selectedIndex: -1, selectedIndexes: new Array(), source: null, scrollBarSize: a.jqx.utilities.scrollBarSize, enableHover: true, enableSelection: true, visualItems: new Array(), groups: new Array(), equalItemsWidth: true, itemHeight: -1, visibleItems: new Array(), emptyGroupText: "Group", checkboxes: false, hasThreeStates: false, autoHeight: false, autoItemsHeight: false, roundedcorners: true, touchMode: "auto", displayMember: "", valueMember: "", searchMode: "startswithignorecase", incrementalSearch: true, incrementalSearchDelay: 1000, incrementalSearchKeyDownDelay: 300, allowDrag: false, allowDrop: true, dropAction: "default", touchModeStyle: "auto", keyboardNavigation: true, enableMouseWheel: true, multipleextended: false, selectedValues: new Array(), emptyString: "", rtl: false, rendered: null, renderer: null, dragStart: null, dragEnd: null, focusable: true, ready: null, _checkForHiddenParent: true, autoBind: true, filterable: false, filterHeight: 27, filterPlaceHolder: "Looking for", filterDelay: 100, aria: {"aria-disabled": {name: "disabled", type: "boolean"}}, events: ["select", "unselect", "change", "checkChange", "dragStart", "dragEnd", "bindingComplete"]};
            a.extend(true, this, b)
        }, createInstance: function (c) {
            var b = this;
            if (a.jqx.utilities.scrollBarSize != 15) {
                b.scrollBarSize = a.jqx.utilities.scrollBarSize
            }
            if (b.width == null) {
                b.width = 200
            }
            if (b.height == null) {
                b.height = 200
            }
            b.render();
            var d = b;
            a.jqx.utilities.resize(b.host, function () {
                d._updateSize()
            }, false, b._checkForHiddenParent)
        }, resize: function (c, b) {
            this.width = c;
            this.height = b;
            this._updateSize()
        }, render: function () {
            var l = this;
            var k = l.element.nodeName.toLowerCase();
            if (k == "select" || k == "ul" || k == "ol") {
                l.field = l.element;
                if (l.field.className) {
                    l._className = l.field.className
                }
                var h = {title: l.field.title};
                if (l.field.id.length) {
                    h.id = l.field.id.replace(/[^\w]/g, "_") + "_jqxListBox"
                } else {
                    h.id = a.jqx.utilities.createId() + "_jqxListBox"
                }
                var b = a("<div></div>", h);
                if (!l.width) {
                    l.width = a(l.field).width()
                }
                if (!l.height) {
                    l.height = a(l.field).outerHeight()
                }
                a(l.field).hide().after(b);
                l.host = b;
                l.element = b[0];
                if (l.field.tabIndex) {
                    var c = l.field.tabIndex;
                    l.field.tabIndex = -1;
                    l.element.tabIndex = c
                }
            }
            l.element.innerHTML = "";
            var l = l;
            var g = l.element.className;
            g += " " + l.toThemeProperty("jqx-listbox");
            g += " " + l.toThemeProperty("jqx-reset");
            g += " " + l.toThemeProperty("jqx-rc-all");
            g += " " + l.toThemeProperty("jqx-widget");
            g += " " + l.toThemeProperty("jqx-widget-content");
            l.element.className = g;
            var f = false;
            if (l.width != null && l.width.toString().indexOf("%") != -1) {
                l.host.width(l.width);
                f = true
            }
            if (l.height != null && l.height.toString().indexOf("%") != -1) {
                l.host.height(l.height);
                if (l.host.height() == 0) {
                    l.host.height(200)
                }
                f = true
            }
            if (l.width != null && l.width.toString().indexOf("px") != -1) {
                l.host.width(l.width)
            } else {
                if (l.width != undefined && !isNaN(l.width)) {
                    l.element.style.width = parseInt(l.width) + "px"
                }
            }
            if (l.height != null && l.height.toString().indexOf("px") != -1) {
                l.host.height(l.height)
            } else {
                if (l.height != undefined && !isNaN(l.height)) {
                    l.element.style.height = parseInt(l.height) + "px"
                }
            }
            if (l.multiple || l.multipleextended || l.checkboxes) {
                a.jqx.aria(l, "aria-multiselectable", true)
            } else {
                a.jqx.aria(l, "aria-multiselectable", false)
            }
            var e = a("<div style='-webkit-appearance: none; background: transparent; outline: none; width:100%; height: 100%; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div style='-webkit-appearance: none; border: none; background: transparent; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; align:left; left: 0px; top: 0px; valign:top; position: relative;'><div id='filter" + l.element.id + "' style='display: none; visibility: inherit; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><input style='position: absolute;'/></div><div id='listBoxContent' style='-webkit-appearance: none; border: none; background: transparent; outline: none; border: none; padding: 0px; overflow: hidden; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='verticalScrollBar" + l.element.id + "' style='visibility: inherit; align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='horizontalScrollBar" + l.element.id + "' style='visibility: inherit; align:left; valign:top; left: 0px; top: 0px; position: absolute;'/><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; border: none; position: absolute;'/></div></div>");
            if (l._checkForHiddenParent) {
                l._addInput();
                if (!l.host.attr("tabIndex")) {
                    l.host.attr("tabIndex", 1)
                }
            }
            l.host.attr("role", "listbox");
            l.host.append(e);
            l.filter = l.host.find("#filter" + l.element.id);
            l.filterInput = l.filter.find("input");
            l.filterInput.attr("placeholder", l.filterPlaceHolder);
            l.filterInput.addClass(l.toThemeProperty("jqx-widget jqx-input jqx-rc-all"));
            l.addHandler(l.filterInput, "keyup.textchange", function (n) {
                if (n.keyCode == 13) {
                    l._search(n)
                } else {
                    if (l.filterDelay > 0) {
                        if (l._filterTimer) {
                            clearTimeout(l._filterTimer)
                        }
                        l._filterTimer = setTimeout(function () {
                            l._search(n)
                        }, l.filterDelay)
                    }
                }
                n.stopPropagation()
            });
            var i = l.host.find("#verticalScrollBar" + l.element.id);
            if (!l.host.jqxButton) {
                throw new Error("jqxListBox: Missing reference to jqxbuttons.js.");
                return
            }
            if (!i.jqxScrollBar) {
                throw new Error("jqxListBox: Missing reference to jqxscrollbar.js.");
                return
            }
            var d = parseInt(l.host.height()) / 2;
            if (d == 0) {
                d = 10
            }
            l.vScrollBar = i.jqxScrollBar({_initialLayout: true, vertical: true, rtl: l.rtl, theme: l.theme, touchMode: l.touchMode, largestep: d});
            var m = l.host.find("#horizontalScrollBar" + l.element.id);
            l.hScrollBar = m.jqxScrollBar({_initialLayout: true, vertical: false, rtl: l.rtl, touchMode: l.touchMode, theme: l.theme});
            l.content = l.host.find("#listBoxContent");
            l.content[0].id = "listBoxContent" + l.element.id;
            l.bottomRight = l.host.find("#bottomRight").addClass(l.toThemeProperty("jqx-listbox-bottomright")).addClass(l.toThemeProperty("jqx-scrollbar-state-normal"));
            l.bottomRight[0].id = "bottomRight" + l.element.id;
            l.vScrollInstance = a.data(l.vScrollBar[0], "jqxScrollBar").instance;
            l.hScrollInstance = a.data(l.hScrollBar[0], "jqxScrollBar").instance;
            if (l.isTouchDevice()) {
                if (!(a.jqx.browser.msie && a.jqx.browser.version < 9)) {
                    var j = a("<div class='overlay' unselectable='on' style='z-index: 99; -webkit-appearance: none; border: none; background: black; opacity: 0.01; outline: none; border: none; padding: 0px; overflow: hidden; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>");
                    l.content.parent().append(j);
                    l.overlayContent = l.host.find(".overlay")
                }
            }
            l._updateTouchScrolling();
            l.host.addClass("jqx-disableselect");
            if (l.host.jqxDragDrop) {
                jqxListBoxDragDrop()
            }
        }, _highlight: function (b, c) {
            var d = c.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return b.replace(new RegExp("(" + d + ")", "ig"), function (e, f) {
                return"<b>" + f + "</b>"
            })
        }, _addInput: function () {
            var b = this.host.attr("name");
            if (b) {
                this.host.attr("name", "")
            }
            this.input = a("<input type='hidden'/>");
            this.host.append(this.input);
            this.input.attr("name", b)
        }, _updateTouchScrolling: function () {
            var b = this;
            if (this.isTouchDevice()) {
                b.enableHover = false;
                var c = this.overlayContent ? this.overlayContent : this.content;
                this.removeHandler(a(c), a.jqx.mobile.getTouchEventName("touchstart") + ".touchScroll");
                this.removeHandler(a(c), a.jqx.mobile.getTouchEventName("touchmove") + ".touchScroll");
                this.removeHandler(a(c), a.jqx.mobile.getTouchEventName("touchend") + ".touchScroll");
                this.removeHandler(a(c), "touchcancel.touchScroll");
                a.jqx.mobile.touchScroll(c, b.vScrollInstance.max, function (f, e) {
                    if (b.vScrollBar.css("visibility") != "hidden") {
                        var d = b.vScrollInstance.value;
                        b.vScrollInstance.setPosition(d + e);
                        b._lastScroll = new Date()
                    }
                    if (b.hScrollBar.css("visibility") != "hidden") {
                        var d = b.hScrollInstance.value;
                        b.hScrollInstance.setPosition(d + f);
                        b._lastScroll = new Date()
                    }
                }, this.element.id, this.hScrollBar, this.vScrollBar);
                if (b.vScrollBar.css("visibility") != "visible" && b.hScrollBar.css("visibility") != "visible") {
                    a.jqx.mobile.setTouchScroll(false, this.element.id)
                } else {
                    a.jqx.mobile.setTouchScroll(true, this.element.id)
                }
                this._arrange()
            }
        }, isTouchDevice: function () {
            var b = a.jqx.mobile.isTouchDevice();
            if (this.touchMode == true) {
                if (this.touchDevice) {
                    return true
                }
                if (a.jqx.browser.msie && a.jqx.browser.version < 9) {
                    return false
                }
                this.touchDevice = true;
                b = true;
                a.jqx.mobile.setMobileSimulator(this.element)
            } else {
                if (this.touchMode == false) {
                    b = false
                }
            }
            if (b && this.touchModeStyle != false) {
                this.scrollBarSize = a.jqx.utilities.touchScrollBarSize
            }
            if (b) {
                this.host.addClass(this.toThemeProperty("jqx-touch"))
            }
            return b
        }, beginUpdate: function () {
            this.updatingListBox = true
        }, endUpdate: function () {
            this.updatingListBox = false;
            this._addItems();
            this._renderItems()
        }, beginUpdateLayout: function () {
            this.updating = true
        }, resumeUpdateLayout: function () {
            this.updating = false;
            this.vScrollInstance.value = 0;
            this._render(false)
        }, propertyChangedHandler: function (b, c, e, d) {
            if (this.isInitialized == undefined || this.isInitialized == false) {
                return
            }
            if (c == "filterable") {
                b.refresh()
            }
            if (c == "filterHeight") {
                b._arrange()
            }
            if (c == "filterPlaceHolder") {
                b.filterInput.attr("placeholder", d)
            }
            if (c == "renderer") {
                b._cachedItemHtml = new Array();
                b.refresh()
            }
            if (c == "itemHeight") {
                b.refresh()
            }
            if (c == "source" || c == "checkboxes") {
                if (d == null && e && e.unbindBindingUpdate) {
                    e.unbindBindingUpdate(b.element.id);
                    e.unbindDownloadComplete(b.element.id)
                }
                b.clearSelection();
                b.refresh()
            }
            if (c == "scrollBarSize" || c == "equalItemsWidth") {
                if (d != e) {
                    b._updatescrollbars()
                }
            }
            if (c == "disabled") {
                b._renderItems();
                b.vScrollBar.jqxScrollBar({disabled: d});
                b.hScrollBar.jqxScrollBar({disabled: d})
            }
            if (c == "touchMode" || c == "rtl") {
                b._removeHandlers();
                b.vScrollBar.jqxScrollBar({touchMode: d});
                b.hScrollBar.jqxScrollBar({touchMode: d});
                if (c == "touchMode") {
                    if (!(a.jqx.browser.msie && a.jqx.browser.version < 9)) {
                        var g = a("<div class='overlay' unselectable='on' style='z-index: 99; -webkit-appearance: none; border: none; background: black; opacity: 0.01; outline: none; border: none; padding: 0px; overflow: hidden; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>");
                        b.content.parent().append(g);
                        b.overlayContent = b.host.find(".overlay")
                    }
                }
                b._updateTouchScrolling();
                b._addHandlers();
                b._render(false)
            }
            if (!this.updating) {
                if (c == "width" || c == "height") {
                    b._updateSize()
                }
            }
            if (c == "theme") {
                if (e != d) {
                    b.hScrollBar.jqxScrollBar({theme: b.theme});
                    b.vScrollBar.jqxScrollBar({theme: b.theme});
                    b.host.removeClass();
                    b.host.addClass(b.toThemeProperty("jqx-listbox"));
                    b.host.addClass(b.toThemeProperty("jqx-widget"));
                    b.host.addClass(b.toThemeProperty("jqx-widget-content"));
                    b.host.addClass(b.toThemeProperty("jqx-reset"));
                    b.host.addClass(b.toThemeProperty("jqx-rc-all"));
                    b.refresh()
                }
            }
            if (c == "selectedIndex") {
                b.clearSelection();
                b.selectIndex(d, true)
            }
            if (c == "displayMember" || c == "valueMember") {
                if (e != d) {
                    var f = b.selectedIndex;
                    b.refresh();
                    b.selectedIndex = f;
                    b.selectedIndexes[f] = f
                }
                b._renderItems()
            }
            if (c == "autoHeight") {
                if (e != d) {
                    b._render(false)
                } else {
                    b._updatescrollbars();
                    b._renderItems()
                }
            }
            if (b._checkForHiddenParent && a.jqx.isHidden(b.host)) {
                a.jqx.utilities.resize(this.host, function () {
                    b._updateSize()
                }, false, b._checkForHiddenParent)
            }
        }, loadFromSelect: function (g) {
            if (g == null) {
                return
            }
            var c = "#" + g;
            var d = a(c);
            if (d.length > 0) {
                var b = a.jqx.parseSourceTag(d[0]);
                var f = b.items;
                var e = b.index;
                this.source = f;
                this.fromSelect = true;
                this.clearSelection();
                this.selectedIndex = e;
                this.selectedIndexes[this.selectedIndex] = this.selectedIndex;
                this.refresh()
            }
        }, invalidate: function () {
            this._cachedItemHtml = [];
            this._renderItems();
            this.virtualSize = null;
            this._updateSize()
        }, refresh: function (c) {
            var b = this;
            if (this.vScrollBar == undefined) {
                return
            }
            this._cachedItemHtml = [];
            this.visibleItems = new Array();
            var d = function (e) {
                if (e == true) {
                    if (b.selectedIndex != -1) {
                        var f = b.selectedIndex;
                        b.selectedIndex = -1;
                        b._stopEvents = true;
                        b.selectIndex(f, false, true);
                        if (b.selectedIndex == -1) {
                            b.selectedIndex = f
                        }
                        b._stopEvents = false
                    }
                }
            };
            if (this.itemswrapper != null) {
                this.itemswrapper.remove();
                this.itemswrapper = null
            }
            if (a.jqx.dataAdapter && this.source != null && this.source._source) {
                this.databind(this.source, c);
                d(c);
                return
            }
            if (this.autoBind || (!this.autoBind && !c)) {
                if (this.field) {
                    this.loadSelectTag()
                }
                this.items = this.loadItems(this.source)
            }
            this._raiseEvent("6");
            this._render(false, c == true);
            d(c)
        }, loadSelectTag: function () {
            var b = a.jqx.parseSourceTag(this.field);
            this.source = b.items;
            if (this.selectedIndex == -1) {
                this.selectedIndex = b.index
            }
        }, _render: function (c, b) {
            this._addItems();
            this._renderItems();
            this.vScrollInstance.setPosition(0);
            this._cachedItemHtml = new Array();
            if (c == undefined || c) {
                if (this.items != undefined && this.items != null) {
                    if (this.selectedIndex >= 0 && this.selectedIndex < this.items.length) {
                        this.selectIndex(this.selectedIndex, true, true, true)
                    }
                }
            }
            if (this.allowDrag && this._enableDragDrop) {
                this._enableDragDrop();
                if (this.isTouchDevice()) {
                    this._removeHandlers();
                    if (this.overlayContent) {
                        this.overlayContent.remove();
                        this.overlayContent = null
                    }
                    this._updateTouchScrolling();
                    this._addHandlers();
                    return
                }
            }
            this._updateTouchScrolling();
            if (this.rendered) {
                this.rendered()
            }
            if (this.ready) {
                this.ready()
            }
        }, _hitTest: function (c, f) {
            if (this.filterable) {
                f -= this.filterHeight;
                if (f < 0) {
                    f = 0
                }
            }
            var e = parseInt(this.vScrollInstance.value);
            var b = this._searchFirstVisibleIndex(f + e, this.renderedVisibleItems);
            if (this.renderedVisibleItems[b] != undefined && this.renderedVisibleItems[b].isGroup) {
                return null
            }
            if (this.renderedVisibleItems.length > 0) {
                var d = this.renderedVisibleItems[this.renderedVisibleItems.length - 1];
                if (d.height + d.top < f + e) {
                    return null
                }
            }
            b = this._searchFirstVisibleIndex(f + e);
            return this.visibleItems[b];
            return null
        }, _searchFirstVisibleIndex: function (e, f) {
            if (e == undefined) {
                e = parseInt(this.vScrollInstance.value)
            }
            var c = 0;
            if (f == undefined || f == null) {
                f = this.visibleItems
            }
            var b = f.length;
            while (c <= b) {
                mid = parseInt((c + b) / 2);
                var d = f[mid];
                if (d == undefined) {
                    break
                }
                if (d.initialTop > e && d.initialTop + d.height > e) {
                    b = mid - 1
                } else {
                    if (d.initialTop < e && d.initialTop + d.height <= e) {
                        c = mid + 1
                    } else {
                        return mid;
                        break
                    }
                }
            }
            return 0
        }, _renderItems: function () {
            if (this.items == undefined || this.items.length == 0) {
                this.visibleItems = new Array();
                return
            }
            if (this.updatingListBox == true) {
                return
            }
            var N = this.isTouchDevice();
            var G = this.vScrollInstance;
            var h = this.hScrollInstance;
            var g = parseInt(G.value);
            var f = parseInt(h.value);
            if (this.rtl) {
                if (this.hScrollBar[0].style.visibility != "hidden") {
                    f = h.max - f
                }
            }
            var B = this.items.length;
            var M = this.host.width();
            var K = parseInt(this.content[0].style.width);
            var b = K + parseInt(h.max);
            var q = parseInt(this.vScrollBar[0].style.width) + 2;
            if (this.vScrollBar[0].style.visibility == "hidden") {
                q = 0
            }
            if (this.hScrollBar[0].style.visibility != "visible") {
                b = K
            }
            var l = this._getVirtualItemsCount();
            var L = new Array();
            var F = 0;
            var E = parseInt(this.element.style.height) + 2;
            if (this.element.style.height.indexOf("%") != -1) {
                E = this.host.outerHeight()
            }
            if (isNaN(E)) {
                E = 0
            }
            var t = 0;
            var s = 0;
            var Q = 0;
            if (G.value == 0 || this.visibleItems.length == 0) {
                for (var r = 0; r < this.items.length; r++) {
                    var x = this.items[r];
                    if (x.visible) {
                        x.top = -g;
                        x.initialTop = -g;
                        if (!x.isGroup && x.visible) {
                            this.visibleItems[s++] = x;
                            x.visibleIndex = s - 1
                        }
                        this.renderedVisibleItems[Q++] = x;
                        x.left = -f;
                        var c = x.top + x.height;
                        if (c >= 0 && x.top - x.height <= E) {
                            L[F++] = {index: r, item: x}
                        }
                        g -= x.height
                    }
                }
            }
            var m = g > 0 ? this._searchFirstVisibleIndex(this.vScrollInstance.value, this.renderedVisibleItems) : 0;
            var O = 0;
            F = 0;
            var z = this.vScrollInstance.value;
            var J = 0;
            while (O < 100 + E) {
                var x = this.renderedVisibleItems[m];
                if (x == undefined) {
                    break
                }
                if (x.visible) {
                    x.left = -f;
                    var c = x.top + x.height - z;
                    if (c >= 0 && x.initialTop - z - x.height <= 2 * E) {
                        L[F++] = {index: m, item: x}
                    }
                }
                m++;
                if (x.visible) {
                    O += x.initialTop - z + x.height - O
                }
                J++;
                if (J > this.items.length - 1) {
                    break
                }
            }
            var o = this.toThemeProperty("jqx-listitem-state-normal") + " " + this.toThemeProperty("jqx-item");
            var i = this.toThemeProperty("jqx-listitem-state-group");
            var P = this.toThemeProperty("jqx-listitem-state-disabled") + " " + this.toThemeProperty("jqx-fill-state-disabled");
            var C = 0;
            var n = this;
            for (var r = 0; r < this.visualItems.length; r++) {
                var D = this.visualItems[r];
                var I = function () {
                    var y = D[0].firstChild;
                    if (n.checkboxes) {
                        y = D[0].lastChild
                    }
                    if (y != null) {
                        y.style.visibility = "hidden";
                        y.className = ""
                    }
                    if (n.checkboxes) {
                        var R = D.find(".chkbox");
                        R.css({visibility: "hidden"})
                    }
                };
                if (r < L.length) {
                    var x = L[r].item;
                    if (x.initialTop - z >= E) {
                        I();
                        continue
                    }
                    var A = a(D[0].firstChild);
                    if (this.checkboxes) {
                        A = a(D[0].lastChild)
                    }
                    if (A.length == 0) {
                        continue
                    }
                    if (A[0] == null) {
                        continue
                    }
                    A[0].className = "";
                    A[0].style.display = "block";
                    A[0].style.visibility = "inherit";
                    var p = "";
                    if (!x.isGroup && !this.selectedIndexes[x.index] >= 0) {
                        p = o
                    } else {
                        p = i
                    }
                    if (x.disabled || this.disabled) {
                        p += " " + P
                    }
                    if (this.roundedcorners) {
                        p += " " + this.toThemeProperty("jqx-rc-all")
                    }
                    if (N) {
                        p += " " + this.toThemeProperty("jqx-listitem-state-normal-touch")
                    }
                    A[0].className = p;
                    if (this.renderer) {
                        if (!x.key) {
                            x.key = this.generatekey()
                        }
                        if (!this._cachedItemHtml) {
                            this._cachedItemHtml = new Array()
                        }
                        if (this._cachedItemHtml[x.key]) {
                            if (A[0].innerHTML != this._cachedItemHtml[x.key]) {
                                A[0].innerHTML = this._cachedItemHtml[x.key]
                            }
                        } else {
                            var w = this.renderer(x.index, x.label, x.value);
                            A[0].innerHTML = w;
                            this._cachedItemHtml[x.key] = A[0].innerHTML
                        }
                    } else {
                        if (this.itemHeight !== -1) {
                            var k = 2 + 2 * parseInt(A.css("padding-top"));
                            A[0].style.lineHeight = (x.height - k) + "px";
                            A.css("vertical-align", "middle")
                        }
                        if (x.html != null && x.html.toString().length > 0) {
                            A[0].innerHTML = x.html
                        } else {
                            if (x.label != null || x.value != null) {
                                if (x.label != null) {
                                    if (A[0].innerHTML !== x.label) {
                                        A[0].innerHTML = x.label
                                    }
                                    if (a.trim(x.label) == "") {
                                        A[0].innerHTML = this.emptyString;
                                        if (this.emptyString == "") {
                                            A[0].style.height = (x.height - 8) + "px"
                                        }
                                    }
                                    if (!this.incrementalSearch && !x.disabled) {
                                        if (this.searchString != undefined && this.searchString != "") {
                                            A[0].innerHTML = this._highlight(x.label.toString(), this.searchString)
                                        }
                                    }
                                } else {
                                    if (x.label === null) {
                                        A[0].innerHTML = this.emptyString;
                                        if (this.emptyString == "") {
                                            A[0].style.height = (x.height - 8) + "px"
                                        }
                                    } else {
                                        if (A[0].innerHTML !== x.value) {
                                            A[0].innerHTML = x.value
                                        } else {
                                            if (x.label == "") {
                                                A[0].innerHTML = " "
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (x.label == "" || x.label == null) {
                                    A[0].innerHTML = "";
                                    A[0].style.height = (x.height - 8) + "px"
                                }
                            }
                        }
                    }
                    D[0].style.left = x.left + "px";
                    D[0].style.top = x.initialTop - z + "px";
                    x.element = A[0];
                    if (x.title) {
                        A[0].title = x.title
                    }
                    if (this.equalItemsWidth && !x.isGroup) {
                        if (t == 0) {
                            var d = parseInt(b);
                            var v = parseInt(A.outerWidth()) - parseInt(A.width());
                            d -= v;
                            var H = 1;
                            if (H != null) {
                                H = parseInt(H)
                            } else {
                                H = 0
                            }
                            d -= 2 * H;
                            t = d;
                            if (this.checkboxes && this.hScrollBar[0].style.visibility == "hidden") {
                                t -= 18
                            }
                        }
                        if (K > this.virtualSize.width) {
                            A[0].style.width = t + "px";
                            x.width = t
                        } else {
                            A[0].style.width = -4 + this.virtualSize.width + "px";
                            x.width = this.virtualSize.width - 4
                        }
                    } else {
                        if (A.width() < this.host.width()) {
                            A.width(this.host.width() - 2)
                        }
                    }
                    if (this.rtl) {
                        A[0].style.textAlign = "right"
                    }
                    if (this.autoItemsHeight) {
                        A[0].style.whiteSpace = "normal";
                        A.width(t);
                        x.width = t
                    }
                    C = 0;
                    if (this.checkboxes && !x.isGroup) {
                        if (C == 0) {
                            C = (x.height - 16) / 2;
                            C++
                        }
                        var e = a(D.children()[0]);
                        e[0].item = x;
                        if (!this.rtl) {
                            if (A[0].style.left != "18px") {
                                A[0].style.left = "18px"
                            }
                        } else {
                            if (A[0].style.left != "0px") {
                                A[0].style.left = "0px"
                            }
                        }
                        if (this.rtl) {
                            e.css("left", 8 + x.width + "px")
                        }
                        e[0].style.top = C + "px";
                        e[0].style.display = "block";
                        e[0].style.visibility = "inherit";
                        var u = x.checked;
                        var j = x.checked ? " " + this.toThemeProperty("jqx-checkbox-check-checked") : "";
                        if (e[0].firstChild && e[0].firstChild.firstChild && e[0].firstChild.firstChild.firstChild) {
                            if (e[0].firstChild.firstChild) {
                                if (u) {
                                    e[0].firstChild.firstChild.firstChild.className = j
                                } else {
                                    if (u === false) {
                                        e[0].firstChild.firstChild.firstChild.className = ""
                                    } else {
                                        if (u === null) {
                                            e[0].firstChild.firstChild.firstChild.className = this.toThemeProperty("jqx-checkbox-check-indeterminate")
                                        }
                                    }
                                }
                            }
                        }
                        if (a.jqx.ariaEnabled) {
                            if (u) {
                                D[0].setAttribute("aria-selected", true)
                            } else {
                                D[0].removeAttribute("aria-selected")
                            }
                        }
                    } else {
                        if (this.checkboxes) {
                            var e = a(D.children()[0]);
                            e.css({display: "none", visibility: "inherit"})
                        }
                    }
                    if (!x.disabled && ((!this.filterable && this.selectedIndexes[x.visibleIndex] >= 0) || (x.selected && this.filterable))) {
                        A.addClass(this.toThemeProperty("jqx-listitem-state-selected"));
                        A.addClass(this.toThemeProperty("jqx-fill-state-pressed"));
                        if (a.jqx.ariaEnabled) {
                            D[0].setAttribute("aria-selected", true);
                            this._activeElement = D[0]
                        }
                    } else {
                        if (!this.checkboxes) {
                            if (a.jqx.ariaEnabled) {
                                D[0].removeAttribute("aria-selected")
                            }
                        }
                    }
                } else {
                    I()
                }
            }
        }, generatekey: function () {
            var b = function () {
                return(((1 + Math.random()) * 65536) | 0).toString(16).substring(1)
            };
            return(b() + b() + "-" + b() + "-" + b() + "-" + b() + "-" + b() + b() + b())
        }, _calculateVirtualSize: function () {
            var o = 0;
            var m = 2;
            var g = 0;
            var n = a("<span></span>");
            if (this.equalItemsWidth) {
                n.css("float", "left")
            }
            var h = 0;
            var i = this.host.outerHeight();
            a(document.body).append(n);
            var e = this.items.length;
            var j = this.host.width();
            if (this.autoItemsHeight) {
                j -= 10;
                if (this.vScrollBar.css("visibility") != "hidden") {
                    j -= 20
                }
            }
            if (this.autoItemsHeight || this.renderer || this.groups.length > 1 || (e > 0 && this.items[0].html != null && this.items[0].html != "")) {
                for (var g = 0; g < e; g++) {
                    var r = this.items[g];
                    if (r.isGroup && (r.label == "" && r.html == "")) {
                        continue
                    }
                    if (!r.visible) {
                        continue
                    }
                    var d = "";
                    if (!r.isGroup) {
                        d += this.toThemeProperty("jqx-listitem-state-normal jqx-rc-all")
                    } else {
                        d += this.toThemeProperty("jqx-listitem-state-group jqx-rc-all")
                    }
                    d += " " + this.toThemeProperty("jqx-fill-state-normal");
                    if (this.isTouchDevice()) {
                        d += " " + this.toThemeProperty("jqx-touch")
                    }
                    n[0].className = d;
                    if (this.autoItemsHeight) {
                        n[0].style.whiteSpace = "normal";
                        var b = this.checkboxes ? -20 : 0;
                        n[0].style.width = (b + j) + "px"
                    }
                    if (this.renderer) {
                        var k = this.renderer(r.index, r.label, r.value);
                        n[0].innerHTML = k
                    } else {
                        if (r.html != null && r.html.toString().length > 0) {
                            n[0].innerHTML = r.html
                        } else {
                            if (r.label != null || r.value != null) {
                                if (r.label != null) {
                                    n[0].innerHTML = r.label;
                                    if (r.label == "") {
                                        n[0].innerHTML = "Empty"
                                    }
                                } else {
                                    n[0].innerHTML = r.value
                                }
                            }
                        }
                    }
                    var q = n.outerHeight();
                    var s = n.outerWidth();
                    if (this.itemHeight > -1) {
                        q = this.itemHeight
                    }
                    r.height = q;
                    r.width = s;
                    m += q;
                    o = Math.max(o, s);
                    if (m <= i) {
                        h++
                    }
                }
            } else {
                var m = 0;
                var l = 0;
                var c = "";
                var t = 0;
                var f = 0;
                var p = -1;
                for (var g = 0; g < e; g++) {
                    var r = this.items[g];
                    if (r.isGroup && (r.label == "" && r.html == "")) {
                        continue
                    }
                    if (!r.visible) {
                        continue
                    }
                    p++;
                    var d = "";
                    if (p == 0) {
                        d += this.toThemeProperty("jqx-listitem-state-normal jqx-rc-all");
                        d += " " + this.toThemeProperty("jqx-fill-state-normal");
                        d += " " + this.toThemeProperty("jqx-widget");
                        d += " " + this.toThemeProperty("jqx-listbox");
                        d += " " + this.toThemeProperty("jqx-widget-content");
                        if (this.isTouchDevice()) {
                            d += " " + this.toThemeProperty("jqx-touch");
                            d += " " + this.toThemeProperty("jqx-listitem-state-normal-touch")
                        }
                        n[0].className = d;
                        if (this.autoItemsHeight) {
                            n[0].style.whiteSpace = "normal";
                            var b = this.checkboxes ? -20 : 0;
                            n[0].style.width = (b + j) + "px"
                        }
                        if (r.html == null || (r.label == "" || r.label == null)) {
                            n[0].innerHTML = "Item"
                        } else {
                            if (r.html != null && r.html.toString().length > 0) {
                                n[0].innerHTML = r.html
                            } else {
                                if (r.label != null || r.value != null) {
                                    if (r.label != null) {
                                        if (r.label.toString().match(new RegExp("\\w")) != null || r.label.toString().match(new RegExp("\\d")) != null) {
                                            n[0].innerHTML = r.label
                                        } else {
                                            n[0].innerHTML = "Item"
                                        }
                                    } else {
                                        n[0].innerHTML = r.value
                                    }
                                }
                            }
                        }
                        var q = 1 + n.outerHeight();
                        if (this.itemHeight > -1) {
                            q = this.itemHeight
                        }
                        l = q
                    }
                    if (t != undefined) {
                        f = t
                    }
                    if (r.html != null && r.html.toString().length > 0) {
                        t = Math.max(t, r.html.toString().length);
                        if (f != t) {
                            c = r.html
                        }
                    } else {
                        if (r.label != null) {
                            t = Math.max(t, r.label.length);
                            if (f != t) {
                                c = r.label
                            }
                        } else {
                            if (r.value != null) {
                                t = Math.max(t, r.value.length);
                                if (f != t) {
                                    c = r.value
                                }
                            }
                        }
                    }
                    r.height = l;
                    m += l;
                    if (m <= i) {
                        h++
                    }
                }
                n[0].innerHTML = c;
                o = n.outerWidth()
            }
            m += 2;
            if (h < 10) {
                h = 10
            }
            if (this.filterable) {
                m += this.filterHeight
            }
            n.remove();
            return{width: o, height: m, itemsPerPage: h}
        }, _getVirtualItemsCount: function () {
            if (this.virtualItemsCount == 0) {
                var b = parseInt(this.host.height()) / 5;
                if (b > this.items.length) {
                    b = this.items.length
                }
                return b
            } else {
                return this.virtualItemsCount
            }
        }, _addItems: function (p) {
            var t = this;
            if (t.updatingListBox == true) {
                return
            }
            if (t.items == undefined || t.items.length == 0) {
                t.virtualSize = {width: 0, height: 0, itemsPerPage: 0};
                t._updatescrollbars();
                t.renderedVisibleItems = new Array();
                if (t.itemswrapper) {
                    t.itemswrapper.children().remove()
                }
                return
            }
            if (p == false) {
                var b = t._calculateVirtualSize();
                var f = b.itemsPerPage * 2;
                if (t.autoHeight) {
                    f = t.items.length
                }
                t.virtualItemsCount = Math.min(f, t.items.length);
                var o = b.width;
                t.virtualSize = b;
                t._updatescrollbars();
                return
            }
            var l = this;
            var j = 0;
            t.visibleItems = new Array();
            t.renderedVisibleItems = new Array();
            t._removeHandlers();
            if (t.allowDrag && t._enableDragDrop) {
                t.itemswrapper = null
            }
            if (t.itemswrapper == null) {
                t.content[0].innerHTML = "";
                t.itemswrapper = a('<div style="outline: 0 none; overflow:hidden; width:100%; position: relative;"></div>');
                t.itemswrapper.height(2 * t.host.height());
                t.content.append(t.itemswrapper)
            }
            var b = t._calculateVirtualSize();
            var f = b.itemsPerPage * 2;
            if (t.autoHeight) {
                f = t.items.length
            }
            t.virtualItemsCount = Math.min(f, t.items.length);
            var t = this;
            var o = b.width;
            t.virtualSize = b;
            t.itemswrapper.width(Math.max(t.host.width(), 17 + b.width));
            var c = 0;
            var g = "";
            var e = a.jqx.browser.msie && a.jqx.browser.version < 9;
            var q = e ? ' unselectable="on"' : "";
            for (var h = c; h < t.virtualItemsCount; h++) {
                var s = t.items[h];
                var n = "listitem" + h + t.element.id;
                g += "<div" + q + " role='option' id='" + n + "' class='jqx-listitem-element'>";
                if (t.checkboxes) {
                    g += '<div style="background-color: transparent; padding: 0; margin: 0; position: absolute; float: left; width: 16px; height: 16px;" class="chkbox">';
                    var m = '<div class="' + t.toThemeProperty("jqx-checkbox-default") + " " + t.toThemeProperty("jqx-fill-state-normal") + " " + t.toThemeProperty("jqx-rc-all") + '"><div style="cursor: pointer; width: 13px; height: 13px;">';
                    var u = s.checked ? " " + t.toThemeProperty("jqx-checkbox-check-checked") : "";
                    m += '<span style="width: 13px; height: 13px;" class="checkBoxCheck' + u + '"></span>';
                    m += "</div></div>";
                    g += m;
                    g += "</div>"
                }
                g += "<span" + q + " style='-ms-touch-action: none;'></span></div>"
            }
            if (l.WinJS) {
                t.itemswrapper.html(g)
            } else {
                t.itemswrapper[0].innerHTML = g
            }
            var d = t.itemswrapper.children();
            for (var h = c; h < t.virtualItemsCount; h++) {
                var s = t.items[h];
                var r = a(d[h]);
                if (t.allowDrag && t._enableDragDrop) {
                    r.addClass("draggable")
                }
                if (t.checkboxes) {
                    var i = a(r.children()[0]);
                    r.css("float", "left");
                    var k = a(r[0].firstChild);
                    k.css("float", "left")
                }
                r[0].style.height = s.height + "px";
                r[0].style.top = j + "px";
                j += s.height;
                t.visualItems[h] = r
            }
            t._addHandlers();
            t._updatescrollbars();
            if (t.autoItemsHeight) {
                var b = t._calculateVirtualSize();
                var f = b.itemsPerPage * 2;
                if (t.autoHeight) {
                    f = t.items.length
                }
                t.virtualItemsCount = Math.min(f, t.items.length);
                var t = this;
                var o = b.width;
                t.virtualSize = b;
                t._updatescrollbars()
            }
            if (a.jqx.browser.msie && a.jqx.browser.version < 8) {
                t.host.attr("hideFocus", true);
                t.host.find("div").attr("hideFocus", true)
            }
        }, _updatescrollbars: function () {
            var k = this;
            if (!k.virtualSize) {
                return
            }
            var n = k.virtualSize.height;
            var j = k.virtualSize.width;
            var f = k.vScrollInstance;
            var e = k.hScrollInstance;
            k._arrange(false);
            var l = false;
            var o = k.host.outerWidth();
            var m = k.host.outerHeight();
            var b = 0;
            if (j > o) {
                b = k.hScrollBar.outerHeight() + 2
            }
            if (n + b > m) {
                var d = f.max;
                f.max = 2 + parseInt(n) + b - parseInt(m - 2);
                if (k.vScrollBar[0].style.visibility != "inherit") {
                    k.vScrollBar[0].style.visibility = "inherit";
                    l = true
                }
                if (d != f.max) {
                    f._arrange()
                }
            } else {
                if (k.vScrollBar[0].style.visibility != "hidden") {
                    k.vScrollBar[0].style.visibility = "hidden";
                    l = true;
                    f.setPosition(0)
                }
            }
            var h = 0;
            if (k.vScrollBar[0].style.visibility != "hidden") {
                h = k.scrollBarSize + 6
            }
            var g = k.checkboxes ? 20 : 0;
            if (k.autoItemsHeight) {
                k.hScrollBar[0].style.visibility = "hidden"
            } else {
                if (j >= o - h - g) {
                    var i = e.max;
                    if (k.vScrollBar[0].style.visibility == "inherit") {
                        e.max = g + h + parseInt(j) - k.host.width() + 4
                    } else {
                        e.max = g + parseInt(j) - k.host.width() + 6
                    }
                    if (k.hScrollBar[0].style.visibility != "inherit") {
                        k.hScrollBar[0].style.visibility = "inherit";
                        l = true
                    }
                    if (i != e.max) {
                        e._arrange()
                    }
                    if (k.vScrollBar[0].style.visibility == "inherit") {
                        f.max = 2 + parseInt(n) + k.hScrollBar.outerHeight() + 2 - parseInt(k.host.height())
                    }
                } else {
                    if (k.hScrollBar[0].style.visibility != "hidden") {
                        k.hScrollBar[0].style.visibility = "hidden";
                        l = true
                    }
                }
            }
            e.setPosition(0);
            if (l) {
                k._arrange()
            }
            if (k.itemswrapper) {
                k.itemswrapper[0].style.width = Math.max(0, Math.max(o - 2, 17 + j)) + "px";
                k.itemswrapper[0].style.height = Math.max(0, 2 * m) + "px"
            }
            var c = k.isTouchDevice();
            if (c) {
                if (k.vScrollBar.css("visibility") != "visible" && k.hScrollBar.css("visibility") != "visible") {
                    a.jqx.mobile.setTouchScroll(false, k.element.id)
                } else {
                    a.jqx.mobile.setTouchScroll(true, k.element.id)
                }
            }
        }, clear: function () {
            this.source = null;
            this.clearSelection();
            this.refresh()
        }, clearSelection: function (b) {
            for (var c = 0; c < this.selectedIndexes.length; c++) {
                if (this.selectedIndexes[c] && this.selectedIndexes[c] != -1) {
                    this._raiseEvent("1", {index: c, type: "api", item: this.getVisibleItem(c), originalEvent: null})
                }
                this.selectedIndexes[c] = -1
            }
            this.selectedIndex = -1;
            this.selectedValue = null;
            this.selectedValues = new Array();
            if (b != false) {
                this._renderItems()
            }
        }, unselectIndex: function (b, c) {
            if (isNaN(b)) {
                return
            }
            this.selectedIndexes[b] = -1;
            var e = false;
            for (var d = 0; d < this.selectedIndexes.length; d++) {
                var b = this.selectedIndexes[d];
                if (b != -1 && b != undefined) {
                    e = true
                }
            }
            if (!e) {
                this.selectedValue = null;
                this.selectedIndex = -1;
                if (this.selectedValues[this.getVisibleItem(b).value]) {
                    this.selectedValues[this.getVisibleItem(b).value] = null
                }
            }
            if (c == undefined || c == true) {
                this._renderItems();
                this._raiseEvent("1", {index: b, type: "api", item: this.getVisibleItem(b), originalEvent: null})
            }
            this._updateInputSelection();
            this._raiseEvent("2", {index: b, type: "api", item: this.getItem(b)})
        }, getItem: function (c) {
            if (c == -1 || isNaN(c) || typeof (c) === "string") {
                if (c === -1) {
                    return null
                }
                return this.getItemByValue(c)
            }
            var b = null;
            var d = a.each(this.items, function () {
                if (this.index == c) {
                    b = this;
                    return false
                }
            });
            return b
        }, getVisibleItem: function (b) {
            if (b == -1 || isNaN(b) || typeof (b) === "string") {
                if (b === -1) {
                    return null
                }
                return this.getItemByValue(b)
            }
            return this.visibleItems[b]
        }, getVisibleItems: function () {
            return this.visibleItems
        }, checkIndex: function (b, c, e) {
            if (!this.checkboxes) {
                return
            }
            if (isNaN(b)) {
                return
            }
            if (b < 0 || b >= this.visibleItems.length) {
                return
            }
            if (this.visibleItems[b] != null && this.visibleItems[b].disabled) {
                return
            }
            if (this.disabled) {
                return
            }
            var d = this.getItem(b);
            if (this.groups.length > 0) {
                var d = this.getVisibleItem(b)
            }
            if (d != null) {
                var f = a(d.checkBoxElement);
                d.checked = true;
                if (c == undefined || c == true) {
                    this._updateCheckedItems()
                }
            }
            if (e == undefined || e == true) {
                this._raiseEvent(3, {label: d.label, value: d.value, checked: true, item: d})
            }
        }, getCheckedItems: function () {
            if (!this.checkboxes) {
                return null
            }
            var b = new Array();
            if (this.items == undefined) {
                return
            }
            a.each(this.items, function () {
                if (this.checked) {
                    b[b.length] = this
                }
            });
            return b
        }, checkAll: function (b) {
            if (!this.checkboxes) {
                return
            }
            if (this.disabled) {
                return
            }
            var c = this;
            a.each(this.items, function () {
                var d = this;
                if (b !== false && d.checked !== true) {
                    c._raiseEvent(3, {label: d.label, value: d.value, checked: true, item: d})
                }
                this.checked = true
            });
            this._updateCheckedItems()
        }, uncheckAll: function (b) {
            if (!this.checkboxes) {
                return
            }
            if (this.disabled) {
                return
            }
            var c = this;
            a.each(this.items, function () {
                var d = this;
                if (b !== false && d.checked !== false) {
                    this.checked = false;
                    c._raiseEvent(3, {label: d.label, value: d.value, checked: false, item: d})
                }
                this.checked = false
            });
            this._updateCheckedItems()
        }, uncheckIndex: function (b, c, e) {
            if (!this.checkboxes) {
                return
            }
            if (isNaN(b)) {
                return
            }
            if (b < 0 || b >= this.visibleItems.length) {
                return
            }
            if (this.visibleItems[b] != null && this.visibleItems[b].disabled) {
                return
            }
            if (this.disabled) {
                return
            }
            var d = this.getItem(b);
            if (this.groups.length > 0) {
                var d = this.getVisibleItem(b)
            }
            if (d != null) {
                var f = a(d.checkBoxElement);
                d.checked = false;
                if (c == undefined || c == true) {
                    this._updateCheckedItems()
                }
            }
            if (e == undefined || e == true) {
                this._raiseEvent(3, {label: d.label, value: d.value, checked: false, item: d})
            }
        }, indeterminateIndex: function (b, c, e) {
            if (!this.checkboxes) {
                return
            }
            if (isNaN(b)) {
                return
            }
            if (b < 0 || b >= this.visibleItems.length) {
                return
            }
            if (this.visibleItems[b] != null && this.visibleItems[b].disabled) {
                return
            }
            if (this.disabled) {
                return
            }
            var d = this.getItem(b);
            if (this.groups.length > 0) {
                var d = this.getVisibleItem(b)
            }
            if (d != null) {
                var f = a(d.checkBoxElement);
                d.checked = null;
                if (c == undefined || c == true) {
                    this._updateCheckedItems()
                }
            }
            if (e == undefined || e == true) {
                this._raiseEvent(3, {checked: null})
            }
        }, getSelectedIndex: function () {
            return this.selectedIndex
        }, getSelectedItems: function () {
            var b = this.getVisibleItems();
            var e = this.selectedIndexes;
            var d = [];
            for (var c in e) {
                if (e[c] != -1) {
                    d[d.length] = b[c]
                }
            }
            return d
        }, getSelectedItem: function () {
            return this.getItem(this.selectedIndex)
        }, _updateCheckedItems: function () {
            var b = this.selectedIndex;
            this.clearSelection(false);
            var c = this.getCheckedItems();
            this.selectedIndex = b;
            this._renderItems();
            var d = a.data(this.element, "hoveredItem");
            if (d != null) {
                a(d).addClass(this.toThemeProperty("jqx-listitem-state-hover"));
                a(d).addClass(this.toThemeProperty("jqx-fill-state-hover"))
            }
            this._updateInputSelection()
        }, getItemByValue: function (d) {
            if (this.visibleItems == null) {
                return
            }
            if (d && d.value) {
                d = d.value
            }
            if (this.itemsByValue) {
                return this.itemsByValue[a.trim(d).split(" ").join("")]
            }
            var b = this.visibleItems;
            for (var c = 0; c < b.length; c++) {
                if (b[c].value == d) {
                    return b[c];
                    break
                }
            }
        }, checkItem: function (c) {
            if (c != null) {
                var b = this._getItemByParam(c);
                return this.checkIndex(b.index, true)
            }
            return false
        }, uncheckItem: function (c) {
            if (c != null) {
                var b = this._getItemByParam(c);
                return this.uncheckIndex(b.index, true)
            }
            return false
        }, indeterminateItem: function (c) {
            if (c != null) {
                var b = this._getItemByParam(c);
                return this.indeterminateIndex(b.index, true)
            }
            return false
        }, val: function (c) {
            if (!this.input) {
                return
            }
            var d = function (f) {
                for (var e in f) {
                    if (f.hasOwnProperty(e)) {
                        return false
                    }
                }
                if (typeof c == "number") {
                    return false
                }
                if (typeof c == "date") {
                    return false
                }
                if (typeof c == "boolean") {
                    return false
                }
                if (typeof c == "string") {
                    return false
                }
                return true
            };
            if (d(c) || arguments.length == 0) {
                return this.input.val()
            }
            var b = this.getItemByValue(c);
            if (b != null) {
                this.selectItem(b)
            }
            if (this.input) {
                return this.input.val()
            }
        }, selectItem: function (c) {
            if (c != null) {
                if (c.index == undefined) {
                    var b = this.getItemByValue(c);
                    if (b) {
                        c = b
                    }
                }
                return this.selectIndex(c.visibleIndex, true)
            }
            return false
        }, unselectItem: function (c) {
            if (c != null) {
                if (c.index == undefined) {
                    var b = this.getItemByValue(c);
                    if (b) {
                        c = b
                    }
                }
                return this.unselectIndex(c.visibleIndex, true)
            }
            return false
        }, selectIndex: function (j, q, c, d, m, b) {
            if (isNaN(j)) {
                return
            }
            if (this.filterable) {
                this.selectedIndex = -1
            }
            if (j < -1 || j >= this.visibleItems.length) {
                return
            }
            if (this.visibleItems[j] != null && this.visibleItems[j].disabled) {
                return
            }
            if (this.disabled) {
                return
            }
            if (!this.multiple && !this.multipleextended && this.selectedIndex == j && !d) {
                if (this.visibleItems && this.items && this.visibleItems.length != this.items.length) {
                    h = this.getVisibleItem(j);
                    if (h) {
                        this.selectedValue = h.value;
                        this.selectedValues[h.value] = h.value
                    }
                }
                return
            }
            if (this.checkboxes) {
                this._updateCheckedItems();
                return
            }
            this.focused = true;
            var p = false;
            if (this.selectedIndex != j) {
                p = true
            }
            var o = this.selectedIndex;
            if (this.selectedIndex == j && !this.multiple) {
                o = -1
            }
            if (m == undefined) {
                m = "none"
            }
            var h = this.getItem(j);
            var r = this.getItem(o);
            if (this.visibleItems && this.items && this.visibleItems.length != this.items.length) {
                h = this.getVisibleItem(j);
                r = this.getVisibleItem(o)
            }
            if (d != undefined && d) {
                this._raiseEvent("1", {index: o, type: m, item: r, originalEvent: b});
                this.selectedIndex = j;
                this.selectedIndexes[o] = -1;
                this.selectedIndexes[j] = j;
                if (h) {
                    this.selectedValue = h.value;
                    this.selectedValues[h.value] = h.value
                }
                this._raiseEvent("0", {index: j, type: m, item: h, originalEvent: b})
            } else {
                var l = this;
                var e = function (s, w, u, v, t, i) {
                    l._raiseEvent("1", {index: w, type: u, item: v, originalEvent: i});
                    l.selectedIndex = s;
                    l.selectedIndexes = [];
                    w = s;
                    l.selectedIndexes[s] = s;
                    l.selectedValues = new Array();
                    if (t) {
                        l.selectedValues[t.value] = t.value
                    }
                    l._raiseEvent("0", {index: s, type: u, item: t, originalEvent: i})
                };
                var k = function (s, w, u, v, t, i) {
                    if (l.selectedIndexes[s] == undefined || l.selectedIndexes[s] == -1) {
                        l.selectedIndexes[s] = s;
                        l.selectedIndex = s;
                        if (t) {
                            l.selectedValues[t.value] = t.value;
                            l._raiseEvent("0", {index: s, type: u, item: t, originalEvent: i})
                        }
                    } else {
                        w = l.selectedIndexes[s];
                        v = l.getVisibleItem(w);
                        if (v) {
                            l.selectedValues[v.value] = null
                        }
                        l.selectedIndexes[s] = -1;
                        l.selectedIndex = -1;
                        l._raiseEvent("1", {index: w, type: u, item: v, originalEvent: i})
                    }
                };
                if (this.multipleextended) {
                    if (!this._shiftKey && !this._ctrlKey) {
                        if (m != "keyboard" && m != "mouse") {
                            k(j, o, m, r, h, b);
                            l._clickedIndex = j
                        } else {
                            this.clearSelection(false);
                            l._clickedIndex = j;
                            e(j, o, m, r, h, b)
                        }
                    } else {
                        if (this._ctrlKey) {
                            if (m == "keyboard") {
                                this.clearSelection(false);
                                l._clickedIndex = j
                            }
                            k(j, o, m, r, h, b)
                        } else {
                            if (this._shiftKey) {
                                if (l._clickedIndex == undefined) {
                                    l._clickedIndex = o
                                }
                                var f = Math.min(l._clickedIndex, j);
                                var n = Math.max(l._clickedIndex, j);
                                this.clearSelection(false);
                                for (var g = f; g <= n; g++) {
                                    l.selectedIndexes[g] = g;
                                    l.selectedValues[l.getVisibleItem(g).value] = l.getVisibleItem(g).value;
                                    l._raiseEvent("0", {index: g, type: m, item: this.getVisibleItem(g), originalEvent: b})
                                }
                                if (m != "keyboard") {
                                    l.selectedIndex = l._clickedIndex
                                } else {
                                    l.selectedIndex = j
                                }
                            }
                        }
                    }
                } else {
                    if (this.multiple) {
                        k(j, o, m, r, h, b)
                    } else {
                        if (h) {
                            this.selectedValue = h.value
                        }
                        e(j, o, m, r, h, b)
                    }
                }
            }
            if (c == undefined || c == true) {
                this._renderItems()
            }
            if (q != undefined && q != null && q == true) {
                this.ensureVisible(j)
            }
            this._raiseEvent("2", {index: j, item: h, oldItem: r, type: m, originalEvent: b});
            this._updateInputSelection();
            return p
        }, _updateInputSelection: function () {
            this._syncSelection();
            var c = new Array();
            if (this.input) {
                if (this.selectedIndex == -1) {
                    this.input.val("")
                } else {
                    if (this.items) {
                        if (this.items[this.selectedIndex] != undefined) {
                            this.input.val(this.items[this.selectedIndex].value);
                            c.push(this.items[this.selectedIndex].value)
                        }
                    }
                }
                if (this.multiple || this.multipleextended || this.checkboxes) {
                    var b = !this.checkboxes ? this.getSelectedItems() : this.getCheckedItems();
                    var e = "";
                    if (b) {
                        for (var d = 0; d < b.length; d++) {
                            if (undefined != b[d]) {
                                if (d == b.length - 1) {
                                    e += b[d].value
                                } else {
                                    e += b[d].value + ","
                                }
                                c.push(b[d].value)
                            }
                        }
                        this.input.val(e)
                    }
                }
            }
            if (this.field && this.input) {
                if (this.field.nodeName.toLowerCase() == "select") {
                    a.each(this.field, function (f, g) {
                        a(this).removeAttr("selected");
                        this.selected = c.indexOf(this.value) >= 0;
                        if (this.selected) {
                            a(this).attr("selected", true)
                        }
                    })
                } else {
                    a.each(this.items, function (f, g) {
                        a(this.originalItem.originalItem).removeAttr("data-selected");
                        this.selected = c.indexOf(this.value) >= 0;
                        if (this.selected) {
                            a(this.originalItem.originalItem).attr("data-selected", true)
                        }
                    })
                }
            }
        }, isIndexInView: function (c) {
            if (isNaN(c)) {
                return false
            }
            if (!this.items) {
                return false
            }
            if (c < 0 || c >= this.items.length) {
                return false
            }
            var d = this.vScrollInstance.value;
            if (this.filterable) {
                d -= this.filterHeight
            }
            var e = this.visibleItems[c];
            if (e == undefined) {
                return true
            }
            var b = e.initialTop;
            var f = e.height;
            if (b - d < 0 || b - d + f >= this.host.outerHeight()) {
                return false
            }
            return true
        }, _itemsInPage: function () {
            var b = 0;
            var c = this;
            if (this.items) {
                a.each(this.items, function () {
                    if ((this.initialTop + this.height) >= c.content.height()) {
                        return false
                    }
                    b++
                })
            }
            return b
        }, _firstItemIndex: function () {
            if (this.visibleItems != null) {
                if (this.visibleItems[0]) {
                    if (this.visibleItems[0].isGroup) {
                        return this._nextItemIndex(0)
                    } else {
                        return 0
                    }
                } else {
                    return 0
                }
            }
            return -1
        }, _lastItemIndex: function () {
            if (this.visibleItems != null) {
                if (this.visibleItems[this.visibleItems.length - 1]) {
                    if (this.visibleItems[this.visibleItems.length - 1].isGroup) {
                        return this._prevItemIndex(this.visibleItems.length - 1)
                    } else {
                        return this.visibleItems.length - 1
                    }
                } else {
                    return this.visibleItems.length - 1
                }
            }
            return -1
        }, _nextItemIndex: function (b) {
            for (indx = b + 1; indx < this.visibleItems.length; indx++) {
                if (this.visibleItems[indx]) {
                    if (!this.visibleItems[indx].disabled && !this.visibleItems[indx].isGroup) {
                        return indx
                    }
                }
            }
            return -1
        }, _prevItemIndex: function (b) {
            for (indx = b - 1; indx >= 0; indx--) {
                if (this.visibleItems[indx]) {
                    if (!this.visibleItems[indx].disabled && !this.visibleItems[indx].isGroup) {
                        return indx
                    }
                }
            }
            return -1
        }, _search: function (c) {
            var b = this;
            var d = b.filterInput.val();
            if (c.keyCode == 9) {
                return
            }
            if (b.searchMode == "none" || b.searchMode == null || b.searchMode == "undefined") {
                return
            }
            if (c.keyCode == 16 || c.keyCode == 17 || c.keyCode == 20) {
                return
            }
            if (c.keyCode == 37 || c.keyCode == 39) {
                return false
            }
            if (c.altKey || c.keyCode == 18) {
                return
            }
            if (c.keyCode >= 33 && c.keyCode <= 40) {
                return
            }
            if (c.ctrlKey || b.ctrlKey) {
                if (c.keyCode != 88 && c.keyCode != 86) {
                    return
                }
            }
            if (d === b.searchString) {
                return
            }
            b._updateItemsVisibility(d)
        }, _updateItemsVisibility: function (h) {
            var e = this.getItems();
            if (e == undefined) {
                return{index: -1, matchItem: new Array()}
            }
            var f = this;
            var d = -1;
            var i = new Array();
            var g = 0;
            a.each(e, function (k) {
                var m = "";
                if (!this.isGroup) {
                    if (this.label) {
                        m = this.label
                    } else {
                        if (this.value) {
                            m = this.value
                        } else {
                            if (this.title) {
                                m = this.title
                            } else {
                                m = "jqxItem"
                            }
                        }
                    }
                    m = m.toString();
                    var l = false;
                    switch (f.searchMode) {
                        case"containsignorecase":
                            l = a.jqx.string.containsIgnoreCase(m, h);
                            break;
                        case"contains":
                            l = a.jqx.string.contains(m, h);
                            break;
                        case"equals":
                            l = a.jqx.string.equals(m, h);
                            break;
                        case"equalsignorecase":
                            l = a.jqx.string.equalsIgnoreCase(m, h);
                            break;
                        case"startswith":
                            l = a.jqx.string.startsWith(m, h);
                            break;
                        case"startswithignorecase":
                            l = a.jqx.string.startsWithIgnoreCase(m, h);
                            break;
                        case"endswith":
                            l = a.jqx.string.endsWith(m, h);
                            break;
                        case"endswithignorecase":
                            l = a.jqx.string.endsWithIgnoreCase(m, h);
                            break
                    }
                    if (!l) {
                        this.visible = false
                    }
                    if (l) {
                        i[g++] = this;
                        this.visible = true;
                        d = this.visibleIndex
                    }
                    if (h == "") {
                        this.visible = true;
                        l = false
                    }
                }
            });
            f.renderedVisibleItems = new Array();
            f.visibleItems = new Array();
            f.vScrollInstance.setPosition(0, true);
            f._addItems(false);
            f._renderItems();
            for (var b = 0; b < f.items.length; b++) {
                f.selectedIndexes[b] = -1
            }
            f.selectedIndex = -1;
            for (var c in f.selectedValues) {
                var h = f.selectedValues[c];
                var j = f.getItemByValue(h);
                if (j) {
                    if (j.visible) {
                        f.selectedIndex = j.visibleIndex;
                        f.selectedIndexes[j.visibleIndex] = j.visibleIndex
                    }
                }
            }
            f._syncSelection()
        }, _getMatches: function (g, d) {
            if (g == undefined || g.length == 0) {
                return -1
            }
            if (d == undefined) {
                d = 0
            }
            var b = this.getItems();
            var f = this;
            var c = -1;
            var e = 0;
            a.each(b, function (h) {
                var k = "";
                if (!this.isGroup) {
                    if (this.label) {
                        k = this.label.toString()
                    } else {
                        if (this.value) {
                            k = this.value.toString()
                        } else {
                            if (this.title) {
                                k = this.title.toString()
                            } else {
                                k = "jqxItem"
                            }
                        }
                    }
                    var j = false;
                    switch (f.searchMode) {
                        case"containsignorecase":
                            j = a.jqx.string.containsIgnoreCase(k, g);
                            break;
                        case"contains":
                            j = a.jqx.string.contains(k, g);
                            break;
                        case"equals":
                            j = a.jqx.string.equals(k, g);
                            break;
                        case"equalsignorecase":
                            j = a.jqx.string.equalsIgnoreCase(k, g);
                            break;
                        case"startswith":
                            j = a.jqx.string.startsWith(k, g);
                            break;
                        case"startswithignorecase":
                            j = a.jqx.string.startsWithIgnoreCase(k, g);
                            break;
                        case"endswith":
                            j = a.jqx.string.endsWith(k, g);
                            break;
                        case"endswithignorecase":
                            j = a.jqx.string.endsWithIgnoreCase(k, g);
                            break
                    }
                    if (j && this.visibleIndex >= d) {
                        c = this.visibleIndex;
                        return false
                    }
                }
            });
            return c
        }, findItems: function (e) {
            var b = this.getItems();
            var d = this;
            var c = 0;
            var f = new Array();
            a.each(b, function (g) {
                var j = "";
                if (!this.isGroup) {
                    if (this.label) {
                        j = this.label
                    } else {
                        if (this.value) {
                            j = this.value
                        } else {
                            if (this.title) {
                                j = this.title
                            } else {
                                j = "jqxItem"
                            }
                        }
                    }
                    var h = false;
                    switch (d.searchMode) {
                        case"containsignorecase":
                            h = a.jqx.string.containsIgnoreCase(j, e);
                            break;
                        case"contains":
                            h = a.jqx.string.contains(j, e);
                            break;
                        case"equals":
                            h = a.jqx.string.equals(j, e);
                            break;
                        case"equalsignorecase":
                            h = a.jqx.string.equalsIgnoreCase(j, e);
                            break;
                        case"startswith":
                            h = a.jqx.string.startsWith(j, e);
                            break;
                        case"startswithignorecase":
                            h = a.jqx.string.startsWithIgnoreCase(j, e);
                            break;
                        case"endswith":
                            h = a.jqx.string.endsWith(j, e);
                            break;
                        case"endswithignorecase":
                            h = a.jqx.string.endsWithIgnoreCase(j, e);
                            break
                    }
                    if (h) {
                        f[c++] = this
                    }
                }
            });
            return f
        }, _syncSelection: function () {
            var d = this;
            if (d.filterable) {
                for (var b = 0; b < d.items.length; b++) {
                    var c = d.items[b];
                    c.selected = false
                }
                for (var b = 0; b < d.visibleItems.length; b++) {
                    var c = d.visibleItems[b];
                    if (d.selectedIndexes && d.selectedIndexes[b] == c.visibleIndex) {
                        c.selected = true
                    }
                }
                if (d.itemswrapper) {
                    d._renderItems()
                }
            }
        }, _handleKeyDown: function (n) {
            var s = n.keyCode;
            var k = this;
            var g = k.selectedIndex;
            var d = k.selectedIndex;
            var l = false;
            if (!this.keyboardNavigation || !this.enableSelection) {
                return
            }
            if (this.filterInput && n.target == this.filterInput[0]) {
                return
            }
            var j = function () {
                if (k.multiple) {
                    k.clearSelection(false)
                }
            };
            if (n.altKey) {
                s = -1
            }
            if (k.incrementalSearch) {
                var o = -1;
                if (!k._searchString) {
                    k._searchString = ""
                }
                if ((s == 8 || s == 46) && k._searchString.length >= 1) {
                    k._searchString = k._searchString.substr(0, k._searchString.length - 1)
                }
                var r = String.fromCharCode(s);
                var m = (!isNaN(parseInt(r)));
                var i = false;
                if ((s >= 65 && s <= 97) || m || s == 8 || s == 32 || s == 46) {
                    if (!n.shiftKey) {
                        r = r.toLocaleLowerCase()
                    }
                    var e = 1 + k.selectedIndex;
                    if (s != 8 && s != 32 && s != 46) {
                        if (k._searchString.length > 0 && k._searchString.substr(0, 1) == r) {
                            e = 1 + k.selectedIndex
                        } else {
                            k._searchString += r
                        }
                    }
                    if (s == 32) {
                        k._searchString += " "
                    }
                    var b = this._getMatches(k._searchString, e);
                    o = b;
                    if (o == k._lastMatchIndex || o == -1) {
                        var b = this._getMatches(k._searchString, 0);
                        o = b
                    }
                    k._lastMatchIndex = o;
                    if (o >= 0) {
                        var h = function () {
                            j();
                            k.selectIndex(o, false, false, false, "keyboard", n);
                            var t = k.isIndexInView(o);
                            if (!t) {
                                k.ensureVisible(o)
                            } else {
                                k._renderItems()
                            }
                        };
                        if (k._toSelectTimer) {
                            clearTimeout(k._toSelectTimer)
                        }
                        k._toSelectTimer = setTimeout(function () {
                            h()
                        }, k.incrementalSearchKeyDownDelay)
                    }
                    i = true
                }
                if (k._searchTimer != undefined) {
                    clearTimeout(k._searchTimer)
                }
                if (s == 27 || s == 13) {
                    k._searchString = ""
                }
                k._searchTimer = setTimeout(function () {
                    k._searchString = "";
                    k._renderItems()
                }, k.incrementalSearchDelay);
                if (o >= 0) {
                    return
                }
                if (i) {
                    return false
                }
            }
            if (this.checkboxes) {
                return true
            }
            if (s == 33) {
                var p = k._itemsInPage();
                if (k.selectedIndex - p >= 0) {
                    j();
                    k.selectIndex(d - p, false, false, false, "keyboard", n)
                } else {
                    j();
                    k.selectIndex(k._firstItemIndex(), false, false, false, "keyboard", n)
                }
                k._searchString = ""
            }
            if (s == 32 && this.checkboxes) {
                var f = this.getItem(g);
                if (f != null) {
                    k._updateItemCheck(f, g);
                    n.preventDefault()
                }
                k._searchString = ""
            }
            if (s == 36) {
                j();
                k.selectIndex(k._firstItemIndex(), false, false, false, "keyboard", n);
                k._searchString = ""
            }
            if (s == 35) {
                j();
                k.selectIndex(k._lastItemIndex(), false, false, false, "keyboard", n);
                k._searchString = ""
            }
            if (s == 34) {
                var p = k._itemsInPage();
                if (k.selectedIndex + p < k.visibleItems.length) {
                    j();
                    k.selectIndex(d + p, false, false, false, "keyboard", n)
                } else {
                    j();
                    k.selectIndex(k._lastItemIndex(), false, false, false, "keyboard", n)
                }
                k._searchString = ""
            }
            if (s == 38) {
                k._searchString = "";
                if (k.selectedIndex > 0) {
                    var c = k._prevItemIndex(k.selectedIndex);
                    if (c != k.selectedIndex && c != -1) {
                        j();
                        k.selectIndex(c, false, false, false, "keyboard", n)
                    } else {
                        return true
                    }
                } else {
                    return false
                }
            } else {
                if (s == 40) {
                    k._searchString = "";
                    if (k.selectedIndex + 1 < k.visibleItems.length) {
                        var c = k._nextItemIndex(k.selectedIndex);
                        if (c != k.selectedIndex && c != -1) {
                            j();
                            k.selectIndex(c, false, false, false, "keyboard", n)
                        } else {
                            return true
                        }
                    } else {
                        return false
                    }
                }
            }
            if (s == 35 || s == 36 || s == 38 || s == 40 || s == 34 || s == 33) {
                var q = k.isIndexInView(k.selectedIndex);
                if (!q) {
                    k.ensureVisible(k.selectedIndex)
                } else {
                    k._renderItems()
                }
                return false
            }
            return true
        }, _updateItemCheck: function (b, c) {
            if (this.disabled) {
                return
            }
            if (b.checked == true) {
                b.checked = (b.hasThreeStates && this.hasThreeStates) ? null : false
            } else {
                b.checked = b.checked != null
            }
            switch (b.checked) {
                case true:
                    this.checkIndex(c);
                    break;
                case false:
                    this.uncheckIndex(c);
                    break;
                default:
                    this.indeterminateIndex(c);
                    break
                }
        }, wheel: function (d, c) {
            if (c.autoHeight || !c.enableMouseWheel) {
                d.returnValue = true;
                return true
            }
            if (c.disabled) {
                return true
            }
            var e = 0;
            if (!d) {
                d = window.event
            }
            if (d.originalEvent && d.originalEvent.wheelDelta) {
                d.wheelDelta = d.originalEvent.wheelDelta
            }
            if (d.wheelDelta) {
                e = d.wheelDelta / 120
            } else {
                if (d.detail) {
                    e = -d.detail / 3
                }
            }
            if (e) {
                var b = c._handleDelta(e);
                if (b) {
                    if (d.preventDefault) {
                        d.preventDefault()
                    }
                    if (d.originalEvent != null) {
                        d.originalEvent.mouseHandled = true
                    }
                    if (d.stopPropagation != undefined) {
                        d.stopPropagation()
                    }
                }
                if (b) {
                    b = false;
                    d.returnValue = b;
                    return b
                } else {
                    return false
                }
            }
            if (d.preventDefault) {
                d.preventDefault()
            }
            d.returnValue = false
        }, _handleDelta: function (d) {
            var c = this.vScrollInstance.value;
            if (d < 0) {
                this.scrollDown()
            } else {
                this.scrollUp()
            }
            var b = this.vScrollInstance.value;
            if (c != b) {
                return true
            }
            return false
        }, focus: function () {
            try {
                this.focused = true;
                this.host.focus();
                var c = this;
                setTimeout(function () {
                    c.host.focus()
                }, 10)
            } catch (b) {
            }
        }, _removeHandlers: function () {
            var b = this;
            this.removeHandler(a(document), "keydown.listbox" + this.element.id);
            this.removeHandler(a(document), "keyup.listbox" + this.element.id);
            this.removeHandler(this.vScrollBar, "valueChanged");
            this.removeHandler(this.hScrollBar, "valueChanged");
            if (this._mousewheelfunc) {
                this.removeHandler(this.host, "mousewheel", this._mousewheelfunc)
            } else {
                this.removeHandler(this.host, "mousewheel")
            }
            this.removeHandler(this.host, "keydown");
            this.removeHandler(this.content, "mouseleave");
            this.removeHandler(this.content, "focus");
            this.removeHandler(this.content, "blur");
            this.removeHandler(this.host, "focus");
            this.removeHandler(this.host, "blur");
            this.removeHandler(this.content, "mouseenter");
            this.removeHandler(this.content, "mouseup");
            this.removeHandler(this.content, "mousedown");
            this.removeHandler(this.content, "touchend");
            if (this._mousemovefunc) {
                this.removeHandler(this.content, "mousemove", this._mousemovefunc)
            } else {
                this.removeHandler(this.content, "mousemove")
            }
            this.removeHandler(this.content, "selectstart");
            if (this.overlayContent) {
                this.removeHandler(this.overlayContent, a.jqx.mobile.getTouchEventName("touchend"))
            }
        }, _updateSize: function () {
            if (!this.virtualSize) {
                this._oldheight = null;
                this.virtualSize = this._calculateVirtualSize()
            }
            var b = this;
            b._arrange();
            if (b.host.height() != b._oldheight || b.host.width() != b._oldwidth) {
                var c = b.host.width() != b._oldwidth;
                if (b.autoItemsHeight) {
                    b._render(false)
                } else {
                    if (b.items) {
                        if (b.items.length > 0 && b.virtualItemsCount * b.items[0].height < b._oldheight - 2) {
                            b._render(false)
                        } else {
                            var d = b.vScrollInstance.value;
                            b._updatescrollbars();
                            b._renderItems();
                            if (d < b.vScrollInstance.max) {
                                b.vScrollInstance.setPosition(d)
                            } else {
                                b.vScrollInstance.setPosition(b.vScrollInstance.max)
                            }
                        }
                    }
                }
                b._oldwidth = b.host.width();
                b._oldheight = b.host.height()
            }
        }, _addHandlers: function () {
            var l = this;
            this.focused = false;
            var m = false;
            var j = 0;
            var g = null;
            var j = 0;
            var b = 0;
            var h = new Date();
            var e = this.isTouchDevice();
            this.addHandler(this.vScrollBar, "valueChanged", function (n) {
                if (a.jqx.browser.msie && a.jqx.browser.version > 9) {
                    setTimeout(function () {
                        l._renderItems()
                    }, 1)
                } else {
                    l._renderItems()
                }
            });
            this.addHandler(this.hScrollBar, "valueChanged", function () {
                l._renderItems()
            });
            if (this._mousewheelfunc) {
                this.removeHandler(this.host, "mousewheel", this._mousewheelfunc)
            }
            this._mousewheelfunc = function (n) {
                l.wheel(n, l)
            };
            this.addHandler(this.host, "mousewheel", this._mousewheelfunc);
            this.addHandler(a(document), "keydown.listbox" + this.element.id, function (n) {
                l._ctrlKey = n.ctrlKey;
                l._shiftKey = n.shiftKey
            });
            this.addHandler(a(document), "keyup.listbox" + this.element.id, function (n) {
                l._ctrlKey = n.ctrlKey;
                l._shiftKey = n.shiftKey
            });
            this.addHandler(this.host, "keydown", function (n) {
                return l._handleKeyDown(n)
            });
            this.addHandler(this.content, "mouseleave", function (n) {
                l.focused = false;
                var o = a.data(l.element, "hoveredItem");
                if (o != null) {
                    a(o).removeClass(l.toThemeProperty("jqx-listitem-state-hover"));
                    a(o).removeClass(l.toThemeProperty("jqx-fill-state-hover"));
                    a.data(l.element, "hoveredItem", null)
                }
            });
            this.addHandler(this.content, "focus", function (n) {
                if (!l.disabled) {
                    l.host.addClass(l.toThemeProperty("jqx-fill-state-focus"));
                    l.focused = true
                }
            });
            this.addHandler(this.content, "blur", function (n) {
                l.focused = false;
                l.host.removeClass(l.toThemeProperty("jqx-fill-state-focus"))
            });
            this.addHandler(this.host, "focus", function (n) {
                if (!l.disabled) {
                    l.host.addClass(l.toThemeProperty("jqx-fill-state-focus"));
                    l.focused = true
                }
            });
            this.addHandler(this.host, "blur", function (n) {
                if (a.jqx.browser.msie && a.jqx.browser.version < 9 && l.focused) {
                    return
                }
                l.host.removeClass(l.toThemeProperty("jqx-fill-state-focus"));
                l.focused = false
            });
            this.addHandler(this.content, "mouseenter", function (n) {
                l.focused = true
            });
            var c = a.jqx.utilities.hasTransform(this.host);
            if (this.enableSelection) {
                var f = l.isTouchDevice() && this.touchMode !== true;
                var i = !f ? "mousedown" : "touchend";
                var k = !f ? "mouseup" : "touchend";
                if (this.overlayContent) {
                    this.addHandler(this.overlayContent, a.jqx.mobile.getTouchEventName("touchend"), function (p) {
                        if (!l.enableSelection) {
                            return true
                        }
                        if (f) {
                            l._newScroll = new Date();
                            if (l._newScroll - l._lastScroll < 500) {
                                return true
                            }
                        }
                        var s = a.jqx.mobile.getTouches(p);
                        var t = s[0];
                        if (t != undefined) {
                            var n = l.host.offset();
                            var r = parseInt(t.pageX);
                            var q = parseInt(t.pageY);
                            if (l.touchMode == true) {
                                if (t._pageX != undefined) {
                                    r = parseInt(t._pageX);
                                    q = parseInt(t._pageY)
                                }
                            }
                            r = r - n.left;
                            q = q - n.top;
                            var o = l._hitTest(r, q);
                            if (o != null && !o.isGroup) {
                                l._newScroll = new Date();
                                if (l._newScroll - l._lastScroll < 500) {
                                    return false
                                }
                                if (l.checkboxes) {
                                    l._updateItemCheck(o, o.visibleIndex);
                                    return
                                }
                                if (o.html.indexOf("href") != -1) {
                                    setTimeout(function () {
                                        l.selectIndex(o.visibleIndex, false, true, false, "mouse", p);
                                        l.content.trigger("click");
                                        return false
                                    }, 100)
                                } else {
                                    l.selectIndex(o.visibleIndex, false, true, false, "mouse", p);
                                    if (p.preventDefault) {
                                        p.preventDefault()
                                    }
                                    l.content.trigger("click");
                                    return false
                                }
                            }
                        }
                    })
                } else {
                    var d = false;
                    this.addHandler(this.content, i, function (n) {
                        if (!l.enableSelection) {
                            return true
                        }
                        d = true;
                        if (f) {
                            l._newScroll = new Date();
                            if (l._newScroll - l._lastScroll < 500) {
                                return false
                            }
                        }
                        l.focused = true;
                        if (!l.isTouchDevice() && l.focusable) {
                            l.host.focus()
                        }
                        if (n.target.id != ("listBoxContent" + l.element.id) && l.itemswrapper[0] != n.target) {
                            var r = n.target;
                            var z = a(r).offset();
                            var q = l.host.offset();
                            if (c) {
                                var o = a.jqx.mobile.getLeftPos(r);
                                var t = a.jqx.mobile.getTopPos(r);
                                z.left = o;
                                z.top = t;
                                o = a.jqx.mobile.getLeftPos(l.element);
                                t = a.jqx.mobile.getTopPos(l.element);
                                q.left = o;
                                q.top = t
                            }
                            var s = parseInt(z.top) - parseInt(q.top);
                            var v = parseInt(z.left) - parseInt(q.left);
                            var w = l._hitTest(v, s);
                            if (w != null && !w.isGroup) {
                                var p = function (y, x) {
                                    if (!l._shiftKey) {
                                        l._clickedIndex = y.visibleIndex
                                    }
                                    if (!l.checkboxes) {
                                        l.selectIndex(y.visibleIndex, false, true, false, "mouse", x)
                                    } else {
                                        l.selectedIndex = y.visibleIndex;
                                        v = 20 + x.pageX - z.left;
                                        if (l.rtl) {
                                            var A = l.hScrollBar.css("visibility") != "hidden" ? l.hScrollInstance.max : l.host.width();
                                            if (v <= l.host.width() - 20) {
                                                if (!l.allowDrag) {
                                                    l._updateItemCheck(y, y.visibleIndex)
                                                } else {
                                                    setTimeout(function () {
                                                        if (!l._dragItem) {
                                                            if (!d) {
                                                                l._updateItemCheck(y, y.visibleIndex)
                                                            }
                                                        }
                                                    }, 200)
                                                }
                                            }
                                        } else {
                                            if (v + l.hScrollInstance.value >= 20) {
                                                if (!l.allowDrag) {
                                                    l._updateItemCheck(y, y.visibleIndex)
                                                } else {
                                                    setTimeout(function () {
                                                        if (!l._dragItem) {
                                                            if (!d) {
                                                                l._updateItemCheck(y, y.visibleIndex)
                                                            }
                                                        }
                                                    }, 200)
                                                }
                                            }
                                        }
                                    }
                                };
                                if (!w.disabled) {
                                    if (w.html.indexOf("href") != -1) {
                                        setTimeout(function () {
                                            p(w, n)
                                        }, 100)
                                    } else {
                                        p(w, n)
                                    }
                                }
                            }
                            if (i == "mousedown") {
                                var u = false;
                                if (n.which) {
                                    u = (n.which == 3)
                                } else {
                                    if (n.button) {
                                        u = (n.button == 2)
                                    }
                                }
                                if (u) {
                                    return true
                                }
                                return false
                            }
                        }
                        return true
                    })
                }
                this.addHandler(this.content, "mouseup", function (n) {
                    l.vScrollInstance.handlemouseup(l, n);
                    d = false
                });
                if (a.jqx.browser.msie) {
                    this.addHandler(this.content, "selectstart", function (n) {
                        return false
                    })
                }
            }
            var e = this.isTouchDevice();
            if (this.enableHover && !e) {
                this._mousemovefunc = function (n) {
                    if (e) {
                        return true
                    }
                    if (!l.enableHover) {
                        return true
                    }
                    var p = a.jqx.browser.msie == true && a.jqx.browser.version < 9 ? 0 : 1;
                    if (n.target == null) {
                        return true
                    }
                    if (l.disabled) {
                        return true
                    }
                    l.focused = true;
                    var r = l.vScrollInstance.isScrolling();
                    if (!r && n.target.id != ("listBoxContent" + l.element.id)) {
                        if (l.itemswrapper[0] != n.target) {
                            var t = n.target;
                            var B = a(t).offset();
                            var s = l.host.offset();
                            if (c) {
                                var o = a.jqx.mobile.getLeftPos(t);
                                var v = a.jqx.mobile.getTopPos(t);
                                B.left = o;
                                B.top = v;
                                o = a.jqx.mobile.getLeftPos(l.element);
                                v = a.jqx.mobile.getTopPos(l.element);
                                s.left = o;
                                s.top = v
                            }
                            var u = parseInt(B.top) - parseInt(s.top);
                            var w = parseInt(B.left) - parseInt(s.left);
                            var A = l._hitTest(w, u);
                            if (A != null && !A.isGroup && !A.disabled) {
                                var q = a.data(l.element, "hoveredItem");
                                if (q != null) {
                                    a(q).removeClass(l.toThemeProperty("jqx-listitem-state-hover"));
                                    a(q).removeClass(l.toThemeProperty("jqx-fill-state-hover"))
                                }
                                a.data(l.element, "hoveredItem", A.element);
                                var z = a(A.element);
                                z.addClass(l.toThemeProperty("jqx-listitem-state-hover"));
                                z.addClass(l.toThemeProperty("jqx-fill-state-hover"))
                            }
                        }
                    }
                };
                this.addHandler(this.content, "mousemove", this._mousemovefunc)
            }
        }, _arrange: function (u) {
            if (u == undefined) {
                u = true
            }
            var t = this;
            var p = null;
            var n = null;
            var g = t.filterable ? t.filterHeight : 0;
            var j = function (h) {
                h = t.host.height();
                if (h == 0) {
                    h = 200;
                    t.host.height(h)
                }
                return h
            };
            if (t.width != null && t.width.toString().indexOf("px") != -1) {
                p = t.width
            } else {
                if (t.width != undefined && !isNaN(t.width)) {
                    p = t.width
                }
            }
            if (t.height != null && t.height.toString().indexOf("px") != -1) {
                n = t.height
            } else {
                if (t.height != undefined && !isNaN(t.height)) {
                    n = t.height
                }
            }
            if (t.width != null && t.width.toString().indexOf("%") != -1) {
                t.host.css("width", t.width);
                p = t.host.width()
            }
            if (t.height != null && t.height.toString().indexOf("%") != -1) {
                t.host.css("height", t.height);
                n = j(n)
            }
            if (p != null) {
                p = parseInt(p);
                if (parseInt(t.element.style.width) != parseInt(t.width)) {
                    t.host.width(t.width)
                }
            }
            if (!t.autoHeight) {
                if (n != null) {
                    n = parseInt(n);
                    if (parseInt(t.element.style.height) != parseInt(t.height)) {
                        t.host.height(t.height);
                        j(n)
                    }
                }
            } else {
                if (t.virtualSize) {
                    if (t.hScrollBar.css("visibility") != "hidden") {
                        t.host.height(t.virtualSize.height + parseInt(t.scrollBarSize) + 3);
                        t.height = t.virtualSize.height + parseInt(t.scrollBarSize) + 3;
                        n = t.height
                    } else {
                        t.host.height(t.virtualSize.height);
                        t.height = t.virtualSize.height;
                        n = t.virtualSize.height
                    }
                }
            }
            var c = t.scrollBarSize;
            if (isNaN(c)) {
                c = parseInt(c);
                if (isNaN(c)) {
                    c = "17px"
                } else {
                    c = c + "px"
                }
            }
            c = parseInt(c);
            var m = 4;
            var e = 2;
            var f = 0;
            if (t.vScrollBar) {
                if (t.vScrollBar[0].style.visibility != "hidden") {
                    f = c + m
                } else {
                    t.vScrollInstance.setPosition(0)
                }
            } else {
                return
            }
            if (t.hScrollBar) {
                if (t.hScrollBar[0].style.visibility != "hidden") {
                    e = c + m
                } else {
                    t.hScrollInstance.setPosition(0)
                }
            } else {
                return
            }
            if (t.autoItemsHeight) {
                t.hScrollBar[0].style.visibility = "hidden";
                e = 0
            }
            if (n == null) {
                n = 0
            }
            var q = parseInt(n) - m - c;
            if (q < 0) {
                q = 0
            }
            if (parseInt(t.hScrollBar[0].style.height) != c) {
                if (parseInt(c) < 0) {
                    c = 0
                }
                t.hScrollBar[0].style.height = parseInt(c) + "px"
            }
            if (t.hScrollBar[0].style.top != q + "px") {
                t.hScrollBar[0].style.top = q + "px";
                t.hScrollBar[0].style.left = "0px"
            }
            var b = p - c - m;
            if (b < 0) {
                b = 0
            }
            var l = b + "px";
            if (t.hScrollBar[0].style.width != l) {
                t.hScrollBar[0].style.width = l
            }
            if (f == 0) {
                if (p >= 2) {
                    t.hScrollBar[0].style.width = parseInt(p - 2) + "px"
                }
            }
            if (c != parseInt(t.vScrollBar[0].style.width)) {
                t.vScrollBar[0].style.width = parseInt(c) + "px"
            }
            if ((parseInt(n) - e) != parseInt(t.vScrollBar[0].style.height)) {
                var s = parseInt(n) - e;
                if (s < 0) {
                    s = 0
                }
                t.vScrollBar[0].style.height = s + "px"
            }
            if (p == null) {
                p = 0
            }
            var d = parseInt(p) - parseInt(c) - m + "px";
            if (d != t.vScrollBar[0].style.left) {
                if (parseInt(d) >= 0) {
                    t.vScrollBar[0].style.left = d
                }
                t.vScrollBar[0].style.top = "0px"
            }
            var k = t.vScrollInstance;
            k.disabled = t.disabled;
            if (u) {
                k._arrange()
            }
            var o = t.hScrollInstance;
            o.disabled = t.disabled;
            if (u) {
                o._arrange()
            }
            if ((t.vScrollBar[0].style.visibility != "hidden") && (t.hScrollBar[0].style.visibility != "hidden")) {
                t.bottomRight[0].style.visibility = "inherit";
                t.bottomRight[0].style.left = 1 + parseInt(t.vScrollBar[0].style.left) + "px";
                t.bottomRight[0].style.top = 1 + parseInt(t.hScrollBar[0].style.top) + "px";
                if (t.rtl) {
                    t.bottomRight.css({left: 0})
                }
                t.bottomRight[0].style.width = parseInt(c) + 3 + "px";
                t.bottomRight[0].style.height = parseInt(c) + 3 + "px"
            } else {
                t.bottomRight[0].style.visibility = "hidden"
            }
            if (parseInt(t.content[0].style.width) != (parseInt(p) - f)) {
                var i = parseInt(p) - f;
                if (i < 0) {
                    i = 0
                }
                t.content[0].style.width = i + "px"
            }
            if (t.rtl) {
                t.vScrollBar.css({left: 0 + "px", top: "0px"});
                t.hScrollBar.css({left: t.vScrollBar.width() + 2 + "px"});
                if (t.vScrollBar[0].style.visibility != "hidden") {
                    t.content.css("margin-left", 4 + t.vScrollBar.width())
                } else {
                    t.content.css("margin-left", 0);
                    t.hScrollBar.css({left: "0px"})
                }
            }
            if (parseInt(t.content[0].style.height) != (parseInt(n) - e)) {
                var r = parseInt(n) - e;
                if (r < 0) {
                    r = 0
                }
                t.content[0].style.height = r + "px";
                t.content[0].style.top = "0px"
            }
            if (g > 0) {
                t.content[0].style.top = g + "px";
                t.content[0].style.height = parseInt(t.content[0].style.height) - g + "px"
            }
            if (t.filterable) {
                t.filterInput[0].style.height = (g - 6) + "px";
                t.filterInput[0].style.top = "3px";
                t.filterInput[0].style.left = parseInt(t.content.css("left")) + 3 + "px";
                t.filterInput[0].style.width = parseInt(t.content.css("width")) - 7 + "px";
                t.filter[0].style.display = "block"
            } else {
                t.filter[0].style.display = "none"
            }
            if (t.overlayContent) {
                t.overlayContent.width(parseInt(p) - f);
                t.overlayContent.height(parseInt(n) - e)
            }
        }, ensureVisible: function (e) {
            if (isNaN(e)) {
                var f = this.getItemByValue(e);
                if (f) {
                    e = f.index
                }
            }
            var c = this.isIndexInView(e);
            if (!c) {
                if (e < 0) {
                    return
                }
                if (this.autoHeight) {
                    var b = a.data(this.vScrollBar[0], "jqxScrollBar").instance;
                    b.setPosition(0)
                } else {
                    for (indx = 0; indx < this.visibleItems.length; indx++) {
                        var f = this.visibleItems[indx];
                        if (f.visibleIndex == e && !f.isGroup) {
                            var b = a.data(this.vScrollBar[0], "jqxScrollBar").instance;
                            var g = b.value;
                            if (this.filterable) {
                                g -= (this.filterHeight + 2)
                            }
                            var d = this.hScrollBar.css("visibility") === "hidden";
                            var h = d ? 0 : this.scrollBarSize + 4;
                            if (f.initialTop < g) {
                                b.setPosition(f.initialTop)
                            } else {
                                if (f.initialTop + f.height > g + this.host.height()) {
                                    if (this.filterable) {
                                        b.setPosition(this.filterHeight + 2 + f.initialTop + f.height + 2 - this.host.height() + h)
                                    } else {
                                        b.setPosition(f.initialTop + f.height + 2 - this.host.height() + h)
                                    }
                                }
                            }
                            break
                        }
                    }
                }
            }
            this._renderItems()
        }, scrollTo: function (c, b) {
            if (this.vScrollBar.css("visibility") != "hidden") {
                this.vScrollInstance.setPosition(b)
            }
            if (this.hScrollBar.css("visibility") != "hidden") {
                this.hScrollInstance.setPosition(c)
            }
        }, scrollDown: function () {
            if (this.vScrollBar.css("visibility") == "hidden") {
                return false
            }
            var b = this.vScrollInstance;
            if (b.value + b.largestep <= b.max) {
                b.setPosition(b.value + b.largestep);
                return true
            } else {
                b.setPosition(b.max);
                return true
            }
            return false
        }, scrollUp: function () {
            if (this.vScrollBar.css("visibility") == "hidden") {
                return false
            }
            var b = this.vScrollInstance;
            if (b.value - b.largestep >= b.min) {
                b.setPosition(b.value - b.largestep);
                return true
            } else {
                if (b.value != b.min) {
                    b.setPosition(b.min);
                    return true
                }
            }
            return false
        }, databind: function (b, d) {
            this.records = new Array();
            var f = b._source ? true : false;
            var c = new a.jqx.dataAdapter(b, {autoBind: false});
            if (f) {
                c = b;
                b = b._source
            }
            var e = function (k) {
                if (b.type != undefined) {
                    c._options.type = b.type
                }
                if (b.formatdata != undefined) {
                    c._options.formatData = b.formatdata
                }
                if (b.contenttype != undefined) {
                    c._options.contentType = b.contenttype
                }
                if (b.async != undefined) {
                    c._options.async = b.async
                }
            };
            var h = function (p, q) {
                var s = function (t) {
                    if (typeof t === "string") {
                        var v = t;
                        var w = t
                    } else {
                        if (p.displayMember != undefined && p.displayMember != "") {
                            var w = t[p.valueMember];
                            var v = t[p.displayMember]
                        }
                    }
                    if (!p.valueMember && !p.displayMember) {
                        v = w = t
                    }
                    if (t && t.label != undefined) {
                        var v = t.label;
                        var w = t.value
                    }
                    var u = new a.jqx._jqxListBox.item();
                    u.label = v;
                    u.value = w;
                    u.html = "";
                    u.visible = true;
                    u.originalItem = t;
                    u.group = "";
                    u.groupHtml = "";
                    u.disabled = false;
                    u.hasThreeStates = true;
                    return u
                };
                if (q != undefined) {
                    var k = c._changedrecords[0];
                    if (k) {
                        a.each(c._changedrecords, function () {
                            var t = this.index;
                            var u = this.record;
                            if (q != "remove") {
                                var v = s(u)
                            }
                            switch (q) {
                                case"update":
                                    p.updateAt(v, t);
                                    break;
                                case"add":
                                    p.insertAt(v, t);
                                    break;
                                case"remove":
                                    p.removeAt(t);
                                    break
                                }
                        });
                        return
                    }
                }
                p.records = c.records;
                var m = p.records.length;
                p.items = new Array();
                p.itemsByValue = new Array();
                for (var l = 0; l < m; l++) {
                    var n = p.records[l];
                    var o = s(n);
                    o.index = l;
                    p.items[l] = o;
                    var r = o.value;
                    if (o.value == "" || o.value == null) {
                        r = l
                    }
                    p.itemsByValue[a.trim(r).split(" ").join("")] = o
                }
                p._render();
                p._raiseEvent("6")
            };
            e(this);
            var i = this;
            switch (b.datatype) {
                case"local":
                case"array":
                default:
                    if (b.localdata != null) {
                        c.unbindBindingUpdate(this.element.id);
                        if (this.autoBind || (!this.autoBind && !d)) {
                            c.dataBind()
                        }
                        h(this);
                        c.bindBindingUpdate(this.element.id, function (k) {
                            h(i, k)
                        })
                    }
                    break;
                case"json":
                case"jsonp":
                case"xml":
                case"xhtml":
                case"script":
                case"text":
                case"csv":
                case"tab":
                    if (b.localdata != null) {
                        c.unbindBindingUpdate(this.element.id);
                        if (this.autoBind || (!this.autoBind && !d)) {
                            c.dataBind()
                        }
                        h(this);
                        c.bindBindingUpdate(this.element.id, function () {
                            h(i)
                        });
                        return
                    }
                    var j = {};
                    if (c._options.data) {
                        a.extend(c._options.data, j)
                    } else {
                        if (b.data) {
                            a.extend(j, b.data)
                        }
                        c._options.data = j
                    }
                    var g = function () {
                        h(i)
                    };
                    c.unbindDownloadComplete(i.element.id);
                    c.bindDownloadComplete(i.element.id, g);
                    if (this.autoBind || (!this.autoBind && !d)) {
                        c.dataBind()
                    }
                }
        }, loadItems: function (m) {
            if (m == null) {
                this.groups = new Array();
                this.items = new Array();
                this.visualItems = new Array();
                return
            }
            var s = this;
            var k = 0;
            var d = 0;
            var b = 0;
            this.groups = new Array();
            this.items = new Array();
            this.visualItems = new Array();
            var e = new Array();
            this.itemsByValue = new Array();
            a.map(m, function (v) {
                if (v == undefined) {
                    return null
                }
                var j = new a.jqx._jqxListBox.item();
                var w = v.group;
                var i = v.groupHtml;
                var x = v.title;
                if (x == null || x == undefined) {
                    x = ""
                }
                if (w == null || w == undefined) {
                    w = ""
                }
                if (i == null || i == undefined) {
                    i = ""
                }
                if (!s.groups[w]) {
                    s.groups[w] = {items: new Array(), index: -1, caption: w, captionHtml: i};
                    k++;
                    var t = k + "jqxGroup";
                    s.groups[t] = s.groups[w];
                    d++;
                    s.groups.length = d
                }
                var u = s.groups[w];
                u.index++;
                u.items[u.index] = j;
                if (typeof v === "string") {
                    j.label = v;
                    j.value = v
                } else {
                    if (v.label == null && v.value == null && v.html == null && v.group == null && v.groupHtml == null) {
                        j.label = v.toString();
                        j.value = v.toString()
                    } else {
                        j.label = v.label || v.value;
                        j.value = v.value || v.label
                    }
                }
                if (typeof v != "string") {
                    if (s.displayMember != "") {
                        if (v[s.displayMember] != undefined) {
                            j.label = v[s.displayMember]
                        } else {
                            j.label = ""
                        }
                    }
                    if (s.valueMember != "") {
                        j.value = v[s.valueMember]
                    }
                }
                j.hasThreeStates = v.hasThreeStates != undefined ? v.hasThreeStates : true;
                j.originalItem = v;
                j.title = x;
                j.html = v.html || "";
                if (v.html && v.html != "") {
                    if (x && x != "") {
                    }
                }
                j.group = w;
                j.checked = v.checked || false;
                j.groupHtml = v.groupHtml || "";
                j.disabled = v.disabled || false;
                j.visible = v.visible != undefined ? v.visible : true;
                j.index = b;
                e[b] = j;
                b++;
                return j
            });
            var c = new Array();
            var o = 0;
            if (this.fromSelect == undefined || this.fromSelect == false) {
                for (var h = 0; h < d; h++) {
                    var k = h + 1;
                    var n = k + "jqxGroup";
                    var q = this.groups[n];
                    if (q == undefined || q == null) {
                        break
                    }
                    if (h == 0 && q.caption == "" && q.captionHtml == "" && d <= 1) {
                        for (var g = 0; g < q.items.length; g++) {
                            var p = q.items[g].value;
                            if (q.items[g].value == undefined || q.items[g].value == null) {
                                p = g
                            }
                            this.itemsByValue[a.trim(p).split(" ").join("")] = q.items[g]
                        }
                        return q.items
                    } else {
                        var l = new a.jqx._jqxListBox.item();
                        l.isGroup = true;
                        l.label = q.caption;
                        if (q.caption == "" && q.captionHtml == "") {
                            q.caption = this.emptyGroupText;
                            l.label = q.caption
                        }
                        l.html = q.captionHtml;
                        c[o] = l;
                        o++
                    }
                    for (var f = 0; f < q.items.length; f++) {
                        c[o] = q.items[f];
                        var p = q.items[f].value;
                        if (q.items[f].value == "" || q.items[f].value == null) {
                            p = o
                        }
                        s.itemsByValue[a.trim(p).split(" ").join("")] = q.items[f];
                        o++
                    }
                }
            } else {
                var o = 0;
                var r = new Array();
                a.each(e, function () {
                    if (!r[this.group]) {
                        if (this.group != "") {
                            var i = new a.jqx._jqxListBox.item();
                            i.isGroup = true;
                            i.label = this.group;
                            c[o] = i;
                            o++;
                            r[this.group] = true
                        }
                    }
                    c[o] = this;
                    var j = this.value;
                    if (this.value == "" || this.value == null) {
                        j = o - 1
                    }
                    s.itemsByValue[a.trim(j).split(" ").join("")] = this;
                    o++
                })
            }
            return c
        }, _mapItem: function (c) {
            var b = new a.jqx._jqxListBox.item();
            if (this.displayMember) {
                if (c.label == undefined) {
                    c.label = c[this.displayMember]
                }
                if (c.value == undefined) {
                    c.value = c[this.valueMember]
                }
            }
            if (typeof c === "string") {
                b.label = c;
                b.value = c
            } else {
                if (typeof c === "number") {
                    b.label = c.toString();
                    b.value = c.toString()
                } else {
                    b.label = c.label || c.value;
                    b.value = c.value || c.label
                }
            }
            if (b.label == undefined && b.value == undefined && b.html == undefined) {
                b.label = b.value = c
            }
            b.html = c.html || "";
            b.group = c.group || "";
            b.checked = c.checked || false;
            b.title = c.title || "";
            b.groupHtml = c.groupHtml || "";
            b.disabled = c.disabled || false;
            b.visible = c.visible || true;
            return b
        }, addItem: function (b) {
            return this.insertAt(b, this.items ? this.items.length : 0)
        }, _getItemByParam: function (c) {
            if (c != null) {
                if (c.index == undefined) {
                    var b = this.getItemByValue(c);
                    if (b) {
                        c = b
                    }
                }
            }
            return c
        }, insertItem: function (d, b) {
            var c = this._getItemByParam(d);
            return this.insertAt(c, b)
        }, updateItem: function (c, d) {
            var b = this._getItemByParam(d);
            if (b && b.index != undefined) {
                return this.updateAt(c, b.index)
            }
            return false
        }, updateAt: function (d, c) {
            if (d != null) {
                var b = this._mapItem(d);
                this.itemsByValue[a.trim(b.value).split(" ").join("")] = this.items[c];
                this.items[c].value = b.value;
                this.items[c].label = b.label;
                this.items[c].html = b.html;
                this.items[c].disabled = b.disabled
            }
            this._cachedItemHtml = [];
            this._renderItems();
            if (this.rendered) {
                this.rendered()
            }
        }, insertAt: function (l, f) {
            if (l == null) {
                return false
            }
            this._cachedItemHtml = [];
            if (this.items == undefined || this.items.length == 0) {
                this.source = new Array();
                this.refresh();
                var g = this._mapItem(l);
                g.index = 0;
                this.items[this.items.length] = g;
                this._addItems(true);
                this._renderItems();
                if (this.rendered) {
                    this.rendered()
                }
                if (this.allowDrag && this._enableDragDrop) {
                    this._enableDragDrop()
                }
                var k = g.value;
                if (g.value == "" || g.value == null) {
                    k = f
                }
                this.itemsByValue[a.trim(k).split(" ").join("")] = g;
                return false
            }
            var g = this._mapItem(l);
            if (f == -1 || f == undefined || f == null || f >= this.items.length) {
                g.index = this.items.length;
                this.items[this.items.length] = g
            } else {
                var c = new Array();
                var j = 0;
                var e = false;
                var h = 0;
                for (var b = 0; b < this.items.length; b++) {
                    if (this.items[b].isGroup == false) {
                        if (h >= f && !e) {
                            c[j++] = g;
                            g.index = f;
                            h++;
                            e = true
                        }
                    }
                    c[j] = this.items[b];
                    if (!this.items[b].isGroup) {
                        c[j].index = h;
                        h++
                    }
                    j++
                }
                this.items = c
            }
            var k = g.value;
            if (g.value == "" || g.value == null) {
                k = f
            }
            this.itemsByValue[a.trim(k).split(" ").join("")] = g;
            this.visibleItems = new Array();
            this.renderedVisibleItems = new Array();
            var d = a.data(this.vScrollBar[0], "jqxScrollBar").instance;
            var i = d.value;
            d.setPosition(0);
            if ((this.allowDrag && this._enableDragDrop) || (this.virtualSize && this.virtualSize.height < 10 + this.host.height())) {
                this._addItems(true)
            } else {
                this._addItems(false)
            }
            this._renderItems();
            if (this.allowDrag && this._enableDragDrop) {
                this._enableDragDrop()
            }
            d.setPosition(i);
            if (this.rendered) {
                this.rendered()
            }
            return true
        }, removeAt: function (h) {
            if (h < 0 || h > this.items.length - 1) {
                return false
            }
            if (h == undefined) {
                return false
            }
            var d = this.items[h].height;
            var m = this.items[h].value;
            if (m == "" || m == null) {
                m = h
            }
            this.itemsByValue[a.trim(m).split(" ").join("")] = null;
            this.items.splice(h, 1);
            var c = new Array();
            var l = 0;
            var f = false;
            var j = 0;
            for (var b = 0; b < this.items.length; b++) {
                c[l] = this.items[b];
                if (!this.items[b].isGroup) {
                    c[l].index = j;
                    j++
                }
                l++
            }
            this.items = c;
            var e = a.data(this.vScrollBar[0], "jqxScrollBar").instance;
            var e = a.data(this.vScrollBar[0], "jqxScrollBar").instance;
            var k = e.value;
            e.setPosition(0);
            this.visibleItems = new Array();
            this.renderedVisibleItems = new Array();
            if (this.items.length > 0) {
                if (this.virtualSize) {
                    this.virtualSize.height -= d;
                    var n = this.virtualSize.itemsPerPage * 2;
                    if (this.autoHeight) {
                        n = this.items.length
                    }
                    this.virtualItemsCount = Math.min(n, this.items.length)
                }
                this._updatescrollbars()
            } else {
                this._addItems()
            }
            this._renderItems();
            if (this.allowDrag && this._enableDragDrop) {
                this._enableDragDrop()
            }
            if (this.vScrollBar.css("visibility") != "hidden") {
                e.setPosition(k)
            } else {
                e.setPosition(0)
            }
            this.itemsByValue = new Array();
            for (var g = 0; g < this.items.length; g++) {
                var m = this.items[g].value;
                if (this.items[g].value == "" || this.items[g].value == null) {
                    m = g
                }
                this.itemsByValue[a.trim(m).split(" ").join("")] = this.items[g]
            }
            if (this.rendered) {
                this.rendered()
            }
            return true
        }, removeItem: function (e, f) {
            var d = this._getItemByParam(e);
            var b = -1;
            if (d && d.index != undefined && f !== true) {
                for (var c = 0; c < this.items.length; c++) {
                    if (this.items[c].label == d.label && this.items[c].value == d.value) {
                        b = c;
                        break
                    }
                }
                if (b != -1) {
                    return this.removeAt(b)
                }
            }
            if (b == -1) {
                return this.removeAt(d.index)
            }
        }, getItems: function () {
            return this.items
        }, disableItem: function (c) {
            var b = this._getItemByParam(c);
            this.disableAt(b.index)
        }, enableItem: function (c) {
            var b = this._getItemByParam(c);
            this.enableAt(b.index)
        }, disableAt: function (b) {
            if (!this.items) {
                return false
            }
            if (b < 0 || b > this.items.length - 1) {
                return false
            }
            this.items[b].disabled = true;
            this._renderItems();
            return true
        }, enableAt: function (b) {
            if (!this.items) {
                return false
            }
            if (b < 0 || b > this.items.length - 1) {
                return false
            }
            this.items[b].disabled = false;
            this._renderItems();
            return true
        }, destroy: function () {
            if (this.source && this.source.unbindBindingUpdate) {
                this.source.unbindBindingUpdate(this.element.id)
            }
            this._removeHandlers();
            this.vScrollBar.jqxScrollBar("destroy");
            this.hScrollBar.jqxScrollBar("destroy");
            this.vScrollBar.remove();
            this.hScrollBar.remove();
            this.content.remove();
            a.jqx.utilities.resize(this.host, null, true);
            var b = a.data(this.element, "jqxListBox");
            delete this.hScrollInstance;
            delete this.vScrollInstance;
            delete this.vScrollBar;
            delete this.hScrollBar;
            delete this.content;
            delete this.bottomRight;
            delete this.itemswrapper;
            delete this.visualItems;
            delete this.visibleItems;
            delete this.items;
            delete this.groups;
            delete this.renderedVisibleItems;
            delete this._mousewheelfunc;
            delete this._mousemovefunc;
            delete this._cachedItemHtml;
            delete this.itemsByValue;
            delete this._activeElement;
            delete this.source;
            delete this.events;
            if (this.input) {
                this.input.remove();
                delete this.input
            }
            if (b) {
                delete b.instance
            }
            this.host.removeData();
            this.host.removeClass();
            this.host.remove();
            this.element = null;
            delete this.element;
            this.host = null;
            delete this.set;
            delete this.get;
            delete this.call;
            delete this.host
        }, _raiseEvent: function (f, c) {
            if (this._stopEvents == true) {
                return true
            }
            if (c == undefined) {
                c = {owner: null}
            }
            var d = this.events[f];
            args = c;
            args.owner = this;
            this._updateInputSelection();
            var e = new a.Event(d);
            e.owner = this;
            e.args = args;
            if (this.host != null) {
                var b = this.host.trigger(e)
            }
            return b
        }})
})(jqxBaseFramework);
(function (a) {
    a.jqx.parseSourceTag = function (m) {
        var l = new Array();
        var o = a(m).find("option");
        var b = a(m).find("optgroup");
        var k = false;
        if (o.length === 0) {
            o = a(m).find("li");
            if (o.length > 0) {
                k = true
            }
        }
        var d = null;
        var j = 0;
        var d = -1;
        var h = this;
        var c = new Array();
        a.each(o, function (p) {
            var q = b.find(this).length > 0;
            var s = null;
            if (this.text != null && (this.label == null || this.label == "")) {
                this.label = this.text
            }
            if (k === true) {
                this.label = a(this).text();
                this.selected = a(this).attr("data-selected");
                this.checked = this.selected;
                this.value = a(this).attr("data-value") || p;
                this.disabled = a(this).attr("disabled")
            }
            var r = {style: this.style.cssText, selected: this.selected, html: this.innerHTML, classes: this.className, disabled: this.disabled, value: this.value, label: this.label, title: this.title, originalItem: this};
            var i = a.jqx.browser.msie && a.jqx.browser.version < 8;
            if (i && !k) {
                if (r.value == "" && this.text != null && this.text.length > 0) {
                    r.value = this.text
                }
            }
            if (q) {
                s = b.find(this).parent()[0].label;
                r.group = s;
                if (!c[s]) {
                    c[s] = new Array();
                    c.length++
                }
                c[s].push(r)
            }
            if (this.selected) {
                d = p
            }
            r.checked = this.selected;
            if (r.label !== undefined) {
                l.push(r)
            }
        });
        if (c.length > 0) {
            var n = new Array();
            for (var f in c) {
                if (f === "indexOf") {
                    continue
                }
                var g = null;
                for (var e = 0; e < b.length; e++) {
                    if (f === b[e].label || b[e].text) {
                        g = b[e];
                        break
                    }
                }
                a.each(c[f], function (i, p) {
                    if (this.label !== undefined) {
                        n.push(this)
                    }
                })
            }
        }
        if (n && n.length > 0) {
            return{items: n, index: d}
        } else {
            return{items: l, index: d}
        }
    };
    a.jqx._jqxListBox.item = function () {
        var b = {group: "", groupHtml: "", selected: false, isGroup: false, highlighted: false, value: null, label: "", html: null, visible: true, disabled: false, element: null, width: null, height: null, initialTop: null, top: null, left: null, title: "", index: -1, checkBoxElement: null, originalItem: null, checked: false, visibleIndex: -1};
        return b
    }
})(jqxBaseFramework);
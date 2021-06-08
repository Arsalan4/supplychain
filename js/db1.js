$(function() {
    "use strict";

    /* ===== Knob chart initialization ===== */

    $(function() {

        $('.knob').each(function() {

            var elm = $(this);
            var perc = elm.attr("value");

            elm.knob();

            $({ value: 0 }).animate({ value: perc }, {
                duration: 1000,
                easing: 'swing',
                progress: function() {
                    elm.val(Math.ceil(this.value)).trigger('change')
                }
            });
        });
    });

    /* ===== Statistics chart ===== */

  

    /* ===== Visits chart ===== */

    var chart2 = new Chartist.Bar('.ct-visit', {
        labels: [1, 2, 3],
        series: [50, 70, 60]
    }, {
        distributeSeries: true,
        chartPadding: {
            left: -20,
            right: -10
        },
        axisX: {
            showLabel: true,
            showGrid: false
        },
        axisY: {
            showLabel: false,
            showGrid: false
        },
        plugins: [
            Chartist.plugins.tooltip()
        ]
    });

    /* ===== Revenue chart ===== */

    $("#earning").easyPieChart({
        barColor: "#4da8db",
        trackColor: !1,
        scaleColor: !1,
        scaleLength: 0,
        lineCap: "square",
        lineWidth: 12,
        size: 96,
        rotate: 180,
        animate: { duration: 2e3, enabled: !0 }
    });
    $("#pending").easyPieChart({
        barColor: "#4db7df",
        trackColor: !1,
        scaleColor: !1,
        scaleLength: 0,
        lineCap: "square",
        lineWidth: 12,
        size: 74,
        rotate: 180,
        animate: { duration: 2e3, enabled: !0 }
    });
    $("#booking").easyPieChart({
        barColor: "#4ccfe4",
        trackColor: !1,
        scaleColor: !1,
        scaleLength: 0,
        lineCap: "square",
        lineWidth: 12,
        size: 50,
        rotate: 180,
        animate: { duration: 2e3, enabled: !0 }
    });
});

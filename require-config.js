require.config({
    paths: {
        d3: 'bower_components/d3/d3',
        jquery: 'bower_components/jquery/dist/jquery',
        jed: 'bower_components/jed/jed',
        sprintf: 'bower_components/sprintf/src/sprintf',

        // Base dir
        'vizabi': '',

        // Config
        'config': 'vizabi-config',
        'vizabi.config': 'config/config',

        // Base
        'base': 'base',
        'vizabi.base.object': 'base/object/object',
        'vizabi.base.loader.json': 'base/loader/json',
        'vizabi.base.svg.rectBox': 'base/svg/rectBox',

        // Core
        'core': 'core',
        'vizabi.core': 'http://core/vizabi',

        // Managers
        'managers': 'managers',
        'vizabi.managers.layout': 'managers/layout/layout-manager',
        'vizabi.managers.events': 'managers/events/events',
        'vizabi.managers.data': 'managers/data/data',
        'vizabi.managers.i18n': 'bower_components/i18n-js/i18n',

        // Manager helpers
        'vizabi.managers.data.cache': 'managers/data/cache',

        // Tools
        'tools': 'tools',
        'vizabi.tools.scale': 'tools/scale/scale',

        // Widgets
        'widgets': 'widgets',
        'vizabi.widgets.text': 'widgets/text/text',
        'vizabi.widgets.timeslider.default': 'widgets/timeslider/types/default/default',
        'vizabi.widgets.axis': 'widgets/axis/axis',
        'vizabi.widgets.rectangle': 'widgets/rectangle/rectangle',
        'vizabi.widgets.mountains': 'widgets/mountains/mountains',

        // SubWidgets
        // Timeslider
        'vizabi.widgets.timeslider.default.buttons': 'widgets/timeslider/types/default/buttons',
        'vizabi.widgets.timeslider.parts.button.play': 'widgets/timeslider/parts/buttons/play',
        'vizabi.widgets.timeslider.parts.button.pause': 'widgets/timeslider/parts/buttons/pause',
        'vizabi.widgets.timeslider.parts.button.knob': 'widgets/timeslider/parts/buttons/knob',
        'vizabi.widgets.timeslider.parts.timeline.3values': 'widgets/timeslider/parts/timelines/3values',

        // Interactive Visualizations
        'visualizations': 'visualizations',
        'vizabi.visualizations.template': 'visualizations/template',
        'vizabi.visualizations.income-mountain': 'visualizations/income-mountain',
        'vizabi.visualizations.testviz': 'visualizations/testviz',
    },
    shim: {
        d3: {
            exports: 'd3'
        }
    }
});
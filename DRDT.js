/**     -----=== DARK READER DETECT ===-----     **\
 * dark reader detection tool is a script to      *
 * detect people who use an extension like dark   *
 * reader.                                        *
 *                                                *
 * Note :                                         *
 *  - please do not use the script to block       *
 *    users or to track them.                     *
 *  - please use this script only if this kind    *
 *    of extension creates problems on your       *
 *    site and only to display a popin to warn    *
 *    the user that the extension may create      *
 *    problems                                    *
 *  - please mention the author in the list of    *
 *    libraries used and give the github link     *
 *                                                *
 * I would like to remind that all those in the   *
 * notes are not legally required but would be    *
 * appreciated <3                                 *
 *                                                *
 * GitHub link : http://github.com/FloxY-Y/DRDT   *
 *                                                *
 * How to use :                                   *
 * to use it it is strongly recommended to put    *
 * the code in a setTimeout function              *
 * (approximately 1000ms) ! ! !                   *
 *                                                *
 * example :                                      *
 * SetTimeout(function() {                        *
 *     if (DRDT.detected()) {                     *
 *         // Code if detected                    *
 *     } else {                                   *
 *         // Code if not detected                *
 *     }                                          *
 * })                                             *
 *                                                *
 * @license CC0                                   *
 * @author FloxY-Y /                              *
 * @version 1.0.0                                 *
\**                                              **/

(function (ctx) {

    var DRDT = {};

    var DRDT_Sensor = document.createElement("div");
    DRDT_Sensor.classList.add("DRDT");
    DRDT_Sensor.style.position = "fixed";
    DRDT_Sensor.style.left = "-5000px";
    DRDT_Sensor.style.zIndex = "-10";

    var style = document.createElement("style");
    style.innerText = ".DRDT {background: #fff; color: #000;}";

    document.body.appendChild(style);
    document.body.appendChild(DRDT_Sensor);

    DRDT.detected = function() {
        var DRDT_Sensor = document.getElementsByClassName("DRDT")[0];

        var white = getComputedStyle(DRDT_Sensor).backgroundColor.match(/\d+/g).join("");
        var black = getComputedStyle(DRDT_Sensor).color.match(/\d+/g).join("");
        var html = getComputedStyle(document.querySelector('html')).filter;

        if (white != 255255255 || black != 0 || html != 'none') {
            return true;
        }
        return false;
    };

    ctx.DRDT = DRDT;
})(this.window);

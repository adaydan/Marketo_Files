(function () {
    MktoForms2.whenReady(function (form) {
        const oldElement = document.querySelector('.mktoRadioList');
        const newHtml = `
            <input name="eventRegType" id="mktoRadio_24223_0" value="Berlin" aria-required="true"
                aria-labelledby="LbleventRegType LblmktoRadio_24223_0 InstructeventRegType" type="radio" class="mktoField">
            <label for="mktoRadio_24223_0" id="LblmktoRadio_24223_0">Berlin</label>

            <input name="eventRegType" id="mktoRadio_24223_1" value="Washington DC" aria-required="true"
                aria-labelledby="LbleventRegType LblmktoRadio_24223_1 InstructeventRegType" type="radio" class="mktoField">
            <label for="mktoRadio_24223_1" id="LblmktoRadio_24223_1">Washington DC</label>

            <input name="eventRegType" id="mktoRadio_24223_2" value="NYC" aria-required="true"
                aria-labelledby="LbleventRegType LblmktoRadio_24223_2 InstructeventRegType" type="radio" class="mktoField">
            <label for="mktoRadio_24223_2" id="LblmktoRadio_24223_2">NYC</label>

            <input name="eventRegType" id="mktoRadio_24223_3" value="London11111111111111111" aria-required="true"
                aria-labelledby="LbleventRegType LblmktoRadio_24223_3 InstructeventRegType" type="radio" class="mktoField">
            <label for="mktoRadio_24223_3" id="LblmktoRadio_24223_3">London111111111111</label>
        `;

        if (oldElement) {
            oldElement.innerHTML = newHtml.trim();
        } else {
            console.error('Element with class "mktoRadioList" not found')
        }
    });
})();

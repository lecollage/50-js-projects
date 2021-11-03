const Stepper = {
    FIRST_STEP_NUMBER: 1,
    init(step) {
        this._circles = document.querySelectorAll('.circle');
        this._progress = document.querySelector('.progress');
        this._buttonPrev = document.getElementById('button-prev');
        this._buttonNext = document.getElementById('button-next');
        this._currentStep = step;
        this._circlesCount = this._circles.length;

        this._updateView();
        this._listenButtons();
    },
    _listenButtons() {
        this._buttonPrev.addEventListener('click', () => {
            if (this._currentStep === 1) {
                return;
            }

            this._currentStep--;
            this._updateView();
        });
        this._buttonNext.addEventListener('click', () => {
            if (this._currentStep === this._circles.length) {
                return;
            }

            this._currentStep++;
            this._updateView();
        });
    },
    _updateView() {
        this._buttonsUpdate();
        this._circlesUpdate();
        this._progressUpdate();
    },
    _buttonsUpdate() {
      if (this._currentStep === this.FIRST_STEP_NUMBER) {
          this._buttonPrev.disabled = true;
          this._buttonNext.disabled = false;
      } else if (this._currentStep > this.FIRST_STEP_NUMBER && this._currentStep < this._circles.length) {
          this._buttonPrev.disabled = false;
          this._buttonNext.disabled = false;
      } else if (this._currentStep === this._circles.length) {
          this._buttonPrev.disabled = false;
          this._buttonNext.disabled = true;
      }
    },
    _circlesUpdate() {
        for (let i = 0; i < this._circlesCount; i++) {
            this._circles[i].classList.remove('circle-active');
        }

        for (let i = 0; i < this._currentStep; i++) {
            this._circles[i].classList.add('circle-active');
        }
    },
    _progressUpdate() {
        this._progress.style.width =
            ((this._currentStep - 1) / (this._circlesCount - 1)) * 100 + '%';
    }
};

Stepper.init(1);

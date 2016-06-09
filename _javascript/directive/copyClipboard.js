// The following code is from https://dzone.com/articles/angular-copy-to-clipboard-directive 
// By Gil Fink
// I by no mean obtain any right for the code

angular.module('site')
  .directive('copyToClipboard',function copyClipboardDirective() {
  var clip;
  function link(scope, element) {
    function clipboardSimulator() {
      var self = this,
          textarea,
          container;
      function createTextarea() {
        if (!self.textarea) {
          container = document.createElement('div');
          container.id = 'simulate-clipboard-container';
          container.setAttribute('style', ['position: fixed;', 'left: 0px;', 'top: 0px;', 'width: 0px;', 'height: 0px;', 'z-index: 100;', 'opacity: 0;', 'display: block;'].join(''));
          document.body.appendChild(container);
          textarea = document.createElement('textarea');
          textarea.setAttribute('style', ['width: 1px;', 'height: 1px;', 'padding: 0px;'].join(''));
          textarea.id = 'simulate-clipboard';
          self.textarea = textarea;
          container.appendChild(textarea);
        }
      }
      createTextarea();
    }
    clipboardSimulator.prototype.copy = function() {
      this.textarea.innerHTML = '';
      this.textarea.appendChild(document.createTextNode(scope.textToCopy));
      this.textarea.focus();
      this.textarea.select();
      setTimeout(function() {
        document.execCommand('copy');
      }, 20);
    };
    clip = new clipboardSimulator();
    element[0].addEventListener('click', function() {
      clip.copy();
    });
  }
  return {
    restrict: 'A',
    link: link,
    scope: {
      textToCopy: '='
    }
  };
})
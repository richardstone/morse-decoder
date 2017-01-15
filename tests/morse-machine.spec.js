var MorseMachine = require('../morse-machine');
var expect = require('chai').expect;

describe('MorseMachine', function() {
    describe('Converting', function() {
        var machine;

        beforeEach(function() {
            machine = new MorseMachine;
        });

        it('should return with the caracter A when given the morse code: \'.-\'', function() {
            var result = machine._morseToChar('.-');
            expect(result).eql('A');
        });

        it('should return with the string AB when given the morse code: \'.- -...\'', function() {
            var result = machine._morseToString(".- -...");
            expect(result).eql('AB');
        });

        it('should return with the string AB\\nA when given the morse code: \'.- -...  .-\'', function() {
            var result = machine._morseToString(".- -...  .-");
            expect(result).eql('AB\nA');
        });

        it('should return with the string HEY JUDE when given the morse code: \'.... . -.--   .--- ..- -.. .\'', function() {
            var result = machine.deCode(".- -...  .-");
            expect(result).eql('AB\nA');
        });
    });
});
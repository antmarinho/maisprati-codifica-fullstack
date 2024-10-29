import org.example.Calculadora;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculadoraTeste {

    @Test
    public void testSomar() {

        Calculadora calc = new Calculadora();

        int resul = calc.soma(2,3);

        assertEquals(5,resul, "soma 2 e 3 = 5");

    }

    @Test
    public void testSomarNegatico() {

        Calculadora calc = new Calculadora();

        int resul = calc.soma(-1,-2);

        assertEquals(-3,resul, "soma -1 e -2 = -3");

    }

}

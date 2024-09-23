package atividade08;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import atividade08.q1eq2.Produto;
import atividade08.q3eq4.Desenvolvedor;
import atividade08.q3eq4.Funcionario;
import atividade08.q3eq4.Gerente;
import atividade08.q5eq6.Animal;
import atividade08.q5eq6.Bicicleta;
import atividade08.q5eq6.Cachorro;
import atividade08.q5eq6.Carro;
import atividade08.q5eq6.Gato;
import atividade08.q5eq6.IMeioTransporte;
import atividade08.q5eq6.Trem;
import atividade08.q5eq6.Vaca;

public class main {

	public static void main(String[] args) throws Exception {
		
		//teste questao 1 e 2
		
		/*Produto prod = new Produto("pc", 44, 4);
		
		prod.setPreco(-2);
		prod.setQtd(-3);
		
		prod.setPreco(350);
		prod.setQtd(3);
		
		prod.aplicarDesconto(0.2);
		
		System.out.println(prod);*/
		
		
		//teste questao 3 e 4
		
		/*Gerente g = new Gerente("jose", 2500);
		Desenvolvedor d = new Desenvolvedor("ana", 750.30);
		Funcionario f = new Funcionario("rick", 150);
		
		System.out.println(g.calcularBonus());
		System.out.println(d.calcularBonus());
		
		f.trabalhar();
		g.trabalhar();
		d.trabalhar();*/
		
		// teste questao 5 e 6
		
		/*Carro c = new Carro(30);
		Trem t = new Trem(60);
		Bicicleta b = new Bicicleta(0);
		
		Random rand = new Random();
		
		List<IMeioTransporte> trans = new ArrayList<>();
		
		trans.add(c);
		trans.add(t);
		trans.add(b);
		trans.add(t);
		trans.add(t);
		trans.add(c);
		trans.add(b);
		trans.add(t);
		trans.add(b);
		
		for(IMeioTransporte m : trans) {
			
			if(rand.nextBoolean())
				m.acelerar();
			else
				m.frear();
			
		}
		
		System.out.println("a velocidade final do carro e " + c.getMedidor());
		System.out.println("a velocidade final do trem e " + t.getMedidor());
		System.out.println("a velocidade final da bicicleta e " + b.getMedidor());
		
		
		List<Animal> animal = new ArrayList<>();
		
		animal.add(new Cachorro());
		animal.add(new Vaca());
		animal.add(new Gato());
		
		for(Animal a : animal) 
			a.emitirSom(); */

	}

}

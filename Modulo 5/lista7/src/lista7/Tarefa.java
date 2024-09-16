package lista7;

public class Tarefa {
	
	String tarefa;
	boolean check;
	
	public Tarefa(String tarefa) {
		
		this.tarefa = tarefa;
		this.check = false;
		
	}

	
	public String getTarefa() {
		
		return tarefa;
	}

	public void setTarefa(String tarefa) {
		
		this.tarefa = tarefa;
	}


	public boolean getCheck() {
		
		return check;
	}

	public void setCheck(boolean check) {
		
		this.check = check;
	}

	@Override
	public String toString() {
		
		return "[Tarefa = " + tarefa + ", Concluido = " + check + "]";
	}

}

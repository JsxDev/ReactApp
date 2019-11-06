import React,{Component} from 'react';

export default class AddEmpleado extends Component
{
  agregarEmpleado=e=>
  {
      console.log(this.state);
  }
  llenarFormulario=e=>
  {
    let empleado=this.state.empleado;
    empleado[e.target.name]=e.target.value;
    this.setState({
        empleado
    });
  }
  state={
      empleado:{
          ApellidoMaterno:'',
          ApellidoPaterno:'',
          Nombre:'',
      }
  }
  render(){
      return <div className="container">
           <label>Nombre:</label>
           <input type="text" className="form-control" name="Nombre" onChange={this.llenarFormulario} value={this.state.empleado.Nombre}></input>
           <label>Apellido paterno:</label>
           <input type="text" className="form-control" name="ApellidoPaterno" onChange={this.llenarFormulario} value={this.state.empleado.ApellidoPaterno}></input>
           <label>Apellido materno:</label>
           <input type="text" className="form-control" name="ApellidoMaterno" onChange={this.llenarFormulario} value={this.state.empleado.ApellidoMaterno}></input>
           <br></br>
           <div className="offset-10">
           <button type="button" className="float-right btn btn-success" onClick={this.agregarEmpleado}>Add empleado</button>
           </div>
      </div>
  }
}

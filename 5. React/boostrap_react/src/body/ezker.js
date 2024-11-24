function Ezker() {
    return (
      <div className="col-sm-6">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nombre y apellido</label>
            <input 
              type="text" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              placeholder="Nombre" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Déjanos tu comentario</label>
            <textarea 
              className="form-control" 
              id="exampleFormControlTextarea1" 
              rows="12">
            </textarea>                
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
          <button type="submit" className="btn btn-primary">Limpiar</button>
        </form>
      </div>
    );
  }
  
  export default Ezker;
  
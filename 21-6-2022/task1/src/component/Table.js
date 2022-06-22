function Table(){
    
    return(
      <table className="table">
       <tr>
        <img style={{width:"100px" ,margin:"15px"}} src="https://picsum.photos/seed/picsum/200/300" />
       <input type="checkbox" /> HTML
       </tr>
       <br></br>
       <tr>
       <img style={{width:"100px",margin:"15px"}} src="https://picsum.photos/200/300?grayscale" />
       <input type="checkbox" /> PHP
       </tr>
       <br></br>
       <tr>
       <img style={{width:"100px" ,margin:"15px"}} src="https://picsum.photos/200/300/?blur" />
       <input type="checkbox" /> CSS
       </tr>
      </table>
    );
}
export default Table;

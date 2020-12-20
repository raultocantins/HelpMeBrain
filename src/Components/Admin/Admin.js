import React from "react";
import Axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Admin.css";
import Paper from "@material-ui/core/Paper/Paper";
import Block from "../block/Block";
var dataClean = { text: "", trad: "", image: "", capa: "", history: "" };
export default class Admin extends React.Component {
  state = {
    data: { text: "", trad: "", image: "", capa: "", history: "" },
    history: [],
  };
  constructor(props) {
    super(props);
    this.Onchange = this.Onchange.bind(this);
    this.AddTrecho = this.AddTrecho.bind(this);
    this.sendHistory = this.sendHistory.bind(this);
  }
  Onchange(e) {
    switch (e.target.name) {
      case "text":
        this.setState({ data: { ...this.state.data, text: e.target.value } });
        break;
      case "trad":
        this.setState({ data: { ...this.state.data, trad: e.target.value } });
        break;
      case "image":
        this.setState({ data: { ...this.state.data, image: e.target.value } });
        break;
      case "capa":
        this.setState({ data: { ...this.state.data, capa: e.target.value } });
        break;
      case "history":
        this.setState({
          data: { ...this.state.data, history: e.target.value },
        });
        break;
      default:
    }
  }
  AddTrecho() {
    if (
      this.state.data.text &&
      this.state.data.trad &&
      this.state.data.image &&
      this.state.data.capa &&
      this.state.data.history
    ) {
      var history = this.state.history;
      history.push(this.state.data);
      this.setState({
        ...history,
        history,
        data: dataClean,
      });
    }
  }
  sendHistory() {
    Axios.post("https://hmbbackend.herokuapp.com/add/history", this.state.history)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="admin">
        <Paper className="paperAdmin">
          <h1>Administração</h1>
          <div className="groupInputs">
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Texto"
              style={{ margin: 8 }}
              placeholder="Insert a Text"
              helperText="Only in english"
              fullWidth
              name="text"
              margin="normal"
              value={this.state.data.text}
              onChange={this.Onchange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="trad"
              id="outlined-basic"
              variant="outlined"
              label="Tradução"
              style={{ margin: 8 }}
              placeholder="Insira a Tradução"
              helperText="Only in Portuguese"
              fullWidth
              margin="normal"
              value={this.state.data.trad}
              onChange={this.Onchange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="image"
              id="outlined-basic"
              variant="outlined"
              label="Imagem"
              style={{ margin: 8 }}
              placeholder="Insira uma image válida"
              helperText=""
              fullWidth
              margin="normal"
              value={this.state.data.image}
              onChange={this.Onchange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="capa"
              id="outlined-basic"
              variant="outlined"
              label="Capa do Card"
              style={{ margin: 8, width: "48%" }}
              placeholder="Insira uma image válida"
              helperText=""
              fullWidth
              margin="normal"
              value={this.state.data.capa}
              onChange={this.Onchange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              name="history"
              id="outlined-basic"
              variant="outlined"
              label="Nome da História"
              style={{ margin: 8, width: "48%" }}
              helperText=""
              fullWidth
              margin="normal"
              value={this.state.data.history}
              onChange={this.Onchange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              style={{ marginTop: "30px" }}
              variant="contained"
              color="primary"
              onClick={this.AddTrecho}
            >
              Adicionar
            </Button>
            <Button
              style={{ margin: "30px 0px 0px 30px" }}
              variant="contained"
              onClick={this.sendHistory}
            >
              Send History
            </Button>
          </div>
          <div className="dataHistory">
            {this.state.history.map((e) => {
              return <Block data={e} />;
            })}
          </div>
        </Paper>
      </div>
    );
  }
}

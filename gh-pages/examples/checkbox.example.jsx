class CheckboxExample extends React.Component {
  constructor() {
    super();
    this.onOneChecked = this.onOneChecked.bind(this);
    this.onTwoChecked = this.onTwoChecked.bind(this);
    this.onGroupChecked = this.onGroupChecked.bind(this);
    this.state = {one: true, two: false, groupValues: []};
  }

  onOneChecked(checked, value) {
    this.setState(Object.assign({}, this.state, {one: checked}));
  }

  onTwoChecked(checked, value) {
    this.setState(Object.assign({}, this.state, {two: checked}));
  }

  onGroupChecked(values) {
    this.setState(Object.assign({}, this.state, {groupValues: values}));
  }

  render() {
    return <Panel style={{padding: '10px'}}>
      <h4>Alone</h4>
      <Checkbox value={1} label="Option 1"
        checked={this.state.one}
        onChecked={this.onOneChecked} />
      <Checkbox value={2} label="Option 2"
        checked={this.state.two}
        onChecked={this.onTwoChecked} />
      <h4>In Group</h4>
      <CheckboxGroup
        values={this.state.groupValues}
        onChecked={this.onGroupChecked} >
        <Checkbox value={1} label="Option 1" />
        <Checkbox value={2} label="Option 2" />
      </CheckboxGroup>
    </Panel>;
  }
}

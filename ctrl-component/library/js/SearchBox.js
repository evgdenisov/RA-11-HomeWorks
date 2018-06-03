
class SearchBox extends React.Component {
    
    render() {
        let props = this.props;
            return (
                <input 
                type="text" 
                placeholder="Поиск по названию или автору"
                value={props.value}
                onChange={event => props.filterBooks(event.currentTarget.value)}
                />
            );
        
        }
    
}

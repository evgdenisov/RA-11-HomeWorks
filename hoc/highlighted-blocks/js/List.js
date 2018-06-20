'use strict';

const Usual = props => props.children;

const modifyView = (Component) => class modifiedViewComponent extends React.Component {
    constructor(props) {
		super(props);
		this.state = {};
    }

    componentWillMount() {
        const views = this.props.views;
        let ComponentOuter = Usual;
        if (views < 100) ComponentOuter = New;
        if (views >= 1000) ComponentOuter = Popular;
        this.setState({ componentOuter: ComponentOuter });
    }
    
    render() {
        const ComponentOuter = this.state.componentOuter;
        return (
            <ComponentOuter>
                <Component {...this.props} />
            </ComponentOuter>
        );
	}
};

const ModifiedViewArticle = modifyView(Article);
const ModifiedViewVideo = modifyView(Video);

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <ModifiedViewVideo {...item} />
                );

            case 'article':
                return (
                    <ModifiedViewArticle {...item} />
                );
        }
    });
};
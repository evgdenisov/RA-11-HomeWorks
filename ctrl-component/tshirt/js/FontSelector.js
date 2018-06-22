
const FontSelector = ({ fonts, selected, onSelect }) => {
    function onSelectFont(event) {
        const font = fonts.filter(font => font.name === event.currentTarget.value)[0];
        onSelect(font);
    }
    function isChecked(fontName) {
        selected ? (selected.name === fontName) : false;
    }
    function onClick(event) {
        event.currentTarget.children[0].click();
        Array.from(event.currentTarget.parentElement.children).map(el => {
            el.children[0].checked = false;
        })
        event.currentTarget.children[0].checked = true;
    }
    return (
        <div className="font-picker">
            {
                fonts.map((font) => {
                    return  (
                        <div className="grid center font-item"  onClick={onClick}>
                            <input type="radio" 
                            name={font.name} 
                            value={font.name} id={font.name} 
                            onChange={onSelectFont} 
                            checked={isChecked(font.name)} />
                            <label for={font.name} className="grid-1" >
                            <PictureFont text={'abc'} path={font.path} />
                            </label>
                        </div>
                        )
                }) 
            }   
        </div>

    )
}

export default function Radio() {
  return (
    <div>
      <div className="radio">
        <label>
          <input type="radio" value="option1" checked={true} />
          Option 1
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option2" />
          Option 2
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option3" />
          Option 3
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option4" />
          Option 4
        </label>
      </div>
    </div>
  );
}

import Card from '../UI/Card';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const mounth = props.date.toLocaleDateString("en-US", { month: 'long'});
    const day = props.date.toLocaleDateString("en-US", { day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <Card className="expense">
            <div>{day}</div>
            <div>{mounth}</div>
            <div>{year}</div>
        </Card>
    );
}

export default ExpenseDate;
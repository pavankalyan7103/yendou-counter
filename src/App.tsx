import { CounterProvider } from './context/CounterContext';
import Counter from './components/Counter';

const App: React.FC = () => {
    return (
        <CounterProvider>
            <Counter />
        </CounterProvider>
    );
};

export default App;
import PropTypes from 'prop-types';
import styles from './Post.module.css';

export function Post({ src }) {
    return (
        <article className={styles.post}>
            <aside className={styles.sidebar}>
                <img className={styles.cover} src={src} alt="Post cover" />
                <div className={styles.profile}>
                    <strong>Alimento: <em>$valor</em></strong>
                    <footer>
                        <a href="#">Compra</a>
                    </footer>
                </div>
            </aside>
        </article>
    );
}

Post.propTypes = {
    src: PropTypes.string.isRequired
};

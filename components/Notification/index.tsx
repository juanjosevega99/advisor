import styles from './styles.module.css';

type NotificationProps = {
  message: string;
  type: 'error' | 'success' | null;
};

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
  if (!message) return null;

  const notificationStyle =
    type === 'error' ? styles.notificationError : styles.notificationSuccess;

  return (
    <div className={`${styles.notification} ${notificationStyle}`}>
      {message}
    </div>
  );
};

export default Notification;

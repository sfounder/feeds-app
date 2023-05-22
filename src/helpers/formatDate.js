// Хелпер функция для форматирования даты
export const formatDate = (date) => {
    if (!date) {
        return null;
    }

    return new Date(date).toLocaleDateString('ru-RU', {
        hour:   '2-digit',
        minute: '2-digit',
    });
};

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },

    textInput: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        fontSize: 16,
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        textTransform: 'capitalize',
        marginVertical: 5,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },

    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    tableHeaderText: {
        flex: 1,
        fontWeight: 'semibold',
        fontSize: 16,
        textAlign: 'center',
    },

    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },

    tableCell: {
        flex: 1,
        fontSize: 14,
        textAlign: 'center',
        textTransform: 'capitalize',
    },

    selectedRow: {
        backgroundColor: "#e8f5e9",
    },

    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 12,
    },

    label: {
        fontSize: 18,
        marginTop: 12,
    },

    pickerContainer: {
        borderRadius: 5,
        marginVertical: 8,
    },

    picker: {
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 12,
        marginVertical: 5,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        fontSize: 16,
        width: "100%",
    },

    infoText: {
        fontSize: 14,
        textAlign: "center",
        marginVertical: 4,
    },

    cartItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
        marginVertical: 4,
    },

    removeText: {
        color: "red",
        fontSize: 12,
        alignSelf: "center",
    },

    metricsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    metricCard: {
        flex: 1,
        alignItems: "center",
        padding: 15,
        marginHorizontal: 5,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

    metricTitle: {
        fontSize: 16,
        color: "#555",
    },

    metricValue: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 5,
    },

    section: {
        marginBottom: 20,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },

    noDataText: {
        textAlign: "center",
        color: "#888",
    },

    orderItem: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

    actionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    actionButton: {
        flex: 1,
        alignItems: "center",
        padding: 15,
        marginHorizontal: 5,
        backgroundColor: "#007bff",
        borderRadius: 8,
    },

    actionButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },

    widgetContainer: {
        marginBottom: 20,
    },

    inventoryItem: {
        textTransform: "capitalize",
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
});
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { padding: 24, backgroundColor: '#f9fafb' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#007bff', textAlign: 'center' },
  label: { fontWeight: '500', marginTop: 12, marginBottom: 6, color: '#333' },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, borderRadius: 8, fontSize: 16, backgroundColor: '#fff' },
  inputError: { borderColor: 'red' },
  error: { color: 'red', marginBottom: 4, fontSize: 13 },
  radioContainer: { flexDirection: 'row', gap: 24, paddingVertical: 8 },
  radioBtn: { flexDirection: 'row', alignItems: 'center', marginRight: 24 },
  radioBtnSelected: {},
  radioCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 1.5, borderColor: '#007bff', alignItems: 'center', justifyContent: 'center', marginRight: 6 },
  radioDot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#007bff' },
  radioLabel: { fontSize: 15 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  checkboxBox: { width: 20, height: 20, borderRadius: 4, borderWidth: 1.5, borderColor: '#007bff', alignItems: 'center', justifyContent: 'center', marginRight: 8, backgroundColor: '#fff' },
  checkboxTick: { width: 12, height: 12, borderRadius: 2, backgroundColor: '#007bff' },
  checkboxLabel: { fontSize: 15 },
  button: { marginTop: 30, backgroundColor: '#007bff', padding: 15, borderRadius: 10, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2 },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
});

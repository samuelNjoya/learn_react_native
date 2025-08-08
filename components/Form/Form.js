import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import styles from './FormStyle';

// Liste pour radio button (sexe)
const genderOptions = [
  { label: 'Homme', value: 'homme' },
  { label: 'Femme', value: 'femme' },
];

// Liste de matières (checkbox)
const allSubjects = [
  { label: 'Maths', value: 'maths' },
  { label: 'Français', value: 'francais' },
  { label: 'Physique', value: 'physique' },
  { label: 'SVT', value: 'svt' },
];

export default function BeautifulForm() {
  // States pour les champs
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [errors, setErrors] = useState({});

  // Validation simple
  const validate = () => {
    const errs = {};
    if (name.trim().length < 2)
      errs.name = 'Le nom doit contenir au moins 2 caractères';
    if (password.length < 3)
      errs.password = 'Le mot de passe est trop court (≥3 caractères)';
    if (!gender)
      errs.gender = 'Sélectionne ton sexe';
    if (subjects.length < 1)
      errs.subjects = 'Sélectionne au moins une matière';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Soumission
  const submitForm = () => {
    if (validate()) {
      Alert.alert('Succès', 'Formulaire envoyé !\n' + JSON.stringify({ name, password, gender, subjects }, null, 2));
      // Ici tu pourrais envoyer à ton serveur
    }
  };

  // Gestion des checkboxes
  const toggleSubject = (value) => {
    setSubjects((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulaire d'inscription</Text>

      <Text style={styles.label}>Nom</Text>
      <TextInput
        style={[styles.input, errors.name && styles.inputError]}
        value={name}
        onChangeText={setName}
        placeholder="Votre nom"
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
        style={[styles.input, errors.password && styles.inputError]}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Votre mot de passe"
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <Text style={styles.label}>Sexe</Text>
      <View style={styles.radioContainer}>
        {genderOptions.map((opt) => (
          <TouchableOpacity
            key={opt.value}
            style={[styles.radioBtn, gender === opt.value && styles.radioBtnSelected]}
            onPress={() => setGender(opt.value)}
          >
            <View style={styles.radioCircle}>
              {gender === opt.value && <View style={styles.radioDot}/>}
            </View>
            <Text style={styles.radioLabel}>{opt.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}

      <Text style={styles.label}>Matières favorites</Text>
      <View>
        {allSubjects.map((s) => (
          <TouchableOpacity
            key={s.value}
            style={styles.checkboxRow}
            onPress={() => toggleSubject(s.value)}
          >
            <View style={styles.checkboxBox}>
              {subjects.includes(s.value) && <View style={styles.checkboxTick}/>}
            </View>
            <Text style={styles.checkboxLabel}>{s.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {errors.subjects && <Text style={styles.error}>{errors.subjects}</Text>}

      <TouchableOpacity style={styles.button} onPress={submitForm}>
        <Text style={styles.buttonText}>Soumettre</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}



// Style de mon formulaire
{/* <FormStyle /> */}

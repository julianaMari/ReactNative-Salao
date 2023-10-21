const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({
    colaboradorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Colaborador',
        required: true,
    },
    servicoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Servico',
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'I'],
        default: 'A'
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('ColaboradorServico', colaboradorServico);
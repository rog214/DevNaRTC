import { Component } from '@angular/core';
import { JsonCrackVisualizerComponent } from '../../shared/components/json-crack-visualizer/json-crack-visualizer.component';

@Component({
  selector: 'app-leiaute-dfes',
  standalone: true,
  imports: [JsonCrackVisualizerComponent],
  templateUrl: './leiaute-dfes.html'
})
export class LeiauteDfes {
  readonly exemploDocumentoHibrido = {
    identificacao: {
      naturezaOperacao: 'Venda de Mercadorias',
      dataEmissao:      '2026-06-15T14:30:00-03:00',
      tipoDocumento:    'NFC-e'
    },
    emitente: {
      cnpj:              '12345678000199',
      inscricaoEstadual: '123456789',
      regimeTributario:  'Lucro Real'
    },
    destinatario: {
      cpfCnpj:               '98765432000100',
      indicadorContribuinte:  1,
      endereco: {
        cep:             '01310100',
        codigoMunicipio: '3550308',
        uf:              'SP'
      }
    },
    itens: [
      {
        numeroItem:    1,
        codigoProduto: 'PRD001',
        descricao:     'Placa de Vídeo de Alta Performance',
        ncm:           '84718000',
        cfop:          '5102',
        quantidade:    1.0,
        valorUnitario: 3500.00,
        tributos: {
          legado: {
            icms:   { cst: '00', baseCalculo: 3500.00, aliquota: 18.00, valorIcms:   630.00 },
            pis:    { cst: '01', baseCalculo: 3500.00, aliquota:  1.65, valorPis:     57.75 },
            cofins: { cst: '01', baseCalculo: 3500.00, aliquota:  7.60, valorCofins: 266.00 }
          },
          iva: {
            impostoSeletivo: { cst: '99', baseCalculo: 3500.00, aliquota: 0.00, valorIs:  0.00 },
            ibs:             { cst: '00', baseCalculo: 3500.00, aliquota: 0.10, valorIbs: 3.50 },
            cbs:             { cst: '00', baseCalculo: 3500.00, aliquota: 0.90, valorCbs: 31.50 }
          }
        }
      }
    ],
    pagamento: {
      formaPagamento: 'PIX',
      valorTotal:      3535.00,
      splitPayment: {
        cnpjRecebedorPrincipal: '12345678000199',
        valorContaEmpresa:      3500.00,
        impostosRetidos: {
          chaveGoverno:   'CHV-TESOURO',
          valorRetidoIbs: 3.50,
          valorRetidoCbs: 31.50
        }
      }
    }
  };
}

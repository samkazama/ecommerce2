/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nuguru.service;

import com.nuguru.dao.ClientRepository;
import com.nuguru.entities.Client;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author nuguru
 */
@Service
@Transactional
public class ClientServiceImpl implements ClientService {
    private final ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public Iterable<Client> getAllClients() {
       return clientRepository.findAll();
    }

    @Override
    public Optional<Client> getClient(long id) {
        return clientRepository.findById(id);
    }

    @Override
    public Client save(Client client) {
        return clientRepository.save(client);
    }
    
}

import { MemoryRepositoryClienteFisico, FirebaseRepositoryClienteFisico } from '@clienteFisico'

const mediatorRepo = {
  memory: MemoryRepositoryClienteFisico,
  firebase: FirebaseRepositoryClienteFisico,
}

const repositoryInUseClientefisico = mediatorRepo.memory

export { repositoryInUseClientefisico }
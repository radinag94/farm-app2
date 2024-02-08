export interface FieldData {
  id: string;
  name: string;
  shape: {
    type: "Polygon" | "Multypolygon";
    coordinates: number[][][] | number[][][][];
  };
  fieldArea: number;
  soilId: string;
  farmId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface FarmData {
  id: string;
  name: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
export interface LoginPageProps {}
export interface LandingPageProps {}

export interface FarmFormProps {
  onSubmit: (farmData: FarmFormData) => void;
}

export interface FarmFormData {
  name: string;
  latitude: number;
  longitude: number;
  error: string;
}

export interface CreateFieldCultivationFormData {
  pDate: string;
  machineId: string;
  growingPeriodId: string;
  processTypeId: string;
}

export interface FieldFormProps {
  onSubmit: (fieldData: FieldFormData) => void;
}

export interface FieldFormData {
  name: string;
  shape: {
    type: "Polygon" | "Multypolygon";
    coordinates: number[][][] | number[][][][];
  };
  fieldArea: number;
  soilId: string;
  farmId: string;
  error?: string;
}
export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (loginFormData: LoginFormData) => void;
}

export interface MachineFormData {
  name: string;
  brand: string;
  registerNumber: string;
  farmId: string;
  error: string;
}
export interface MachineFormProps {
  onSubmit: (machineData: MachineFormData) => void;
}

export interface SignUpFormProps {
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  email: string;
  password: string;
  confirmPass: string;
}

export interface FarmCardProps {
  farm: {
    id: string;
    name: string;
    location: {
      type: string;
      coordinates: [number, number];
    };
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}
export interface MachineCardProps {
  machine: {
    id: string;
    name: string;
    brand: string;
    farmId: string;
    registerNumber: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}

export interface FieldCardProps {
  field: {
    id: string;
    name: string;
    shape: {
      type: "Polygon" | "Multypolygon";
      coordinates: number[][][] | number[][][][];
    };
    fieldArea: number;
    soilId: string;
    farmId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}
export interface GrowingPeriodCardProps {
  growingPeriod: {
    id: string;
    cropId: string;
    fieldId: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}

export interface EmptyListProps {
  message: string;
}
export interface CropData {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface CreateCropData {
  name: string;
}

export interface SoilData {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface MachineData {
  id: string;
  name: string;
  brand: string;
  registerNumber: string;
  farmId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  error?: string;
}
export interface SoilData {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ProcessTypeData {
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
export interface UpdateFieldFormValues {
  name: string;
  fieldArea: number;
  soilId: string;
  farmId: string;
  coordinates: string;
  error: "";
}

export interface GrowingPeriodData {
  id: string;
  cropId: string;
  fieldId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
